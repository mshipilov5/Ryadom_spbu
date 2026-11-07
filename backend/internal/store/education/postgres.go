package education

import (
	"context"
	"errors"
	"fmt"

	"github.com/mshipilov5/Ryadom_spbu/backend/internal/core"
	"github.com/mshipilov5/Ryadom_spbu/backend/pkg/postgres"
	"gorm.io/gorm"
)

const publishedStatus = "published"

// store follows the shared Kotopes pattern: every feature store embeds Postgres.
type store struct {
	*postgres.Postgres
}

func New(pg *postgres.Postgres) core.EducationStore {
	return &store{pg}
}

func (s *store) ListPublished(ctx context.Context) ([]core.Article, error) {
	var articles []core.Article

	err := s.DB.WithContext(ctx).
		Where("status = ?", publishedStatus).
		Preload("Category").
		Preload("Tags", func(db *gorm.DB) *gorm.DB {
			return db.Order("material_tags.name ASC")
		}).
		Order("published_at DESC").
		Order("id DESC").
		Find(&articles).Error
	if err != nil {
		return nil, fmt.Errorf("list published materials: %w", err)
	}

	for index := range articles {
		articles[index].Published = true
	}

	return articles, nil
}

func (s *store) GetPublishedBySlug(ctx context.Context, slug string) (core.Article, error) {
	var article core.Article

	err := s.DB.WithContext(ctx).
		Where("slug = ? AND status = ?", slug, publishedStatus).
		Preload("Category").
		Preload("Tags", func(db *gorm.DB) *gorm.DB {
			return db.Order("material_tags.name ASC")
		}).
		Preload("Sources", func(db *gorm.DB) *gorm.DB {
			return db.Order("position ASC").Order("id ASC")
		}).
		First(&article).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return core.Article{}, core.ErrArticleNotFound
	}
	if err != nil {
		return core.Article{}, fmt.Errorf("get published material by slug: %w", err)
	}

	article.Published = true
	return article, nil
}
