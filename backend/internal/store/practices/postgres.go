package practices

import (
	"context"
	"errors"
	"fmt"

	"github.com/mshipilov5/Ryadom_spbu/backend/internal/core"
	"github.com/mshipilov5/Ryadom_spbu/backend/pkg/postgres"
	"gorm.io/gorm"
)

const publishedStatus = "published"

// store follows the shared pattern: every feature store embeds Postgres.
type store struct {
	*postgres.Postgres
}

func New(pg *postgres.Postgres) core.PracticesStore {
	return &store{pg}
}

func (s *store) ListPublished(ctx context.Context) ([]core.Practice, error) {
	var practices []core.Practice

	err := s.DB.WithContext(ctx).
		Where("status = ?", publishedStatus).
		Order("id ASC").
		Find(&practices).Error
	if err != nil {
		return nil, fmt.Errorf("list published practices: %w", err)
	}

	return practices, nil
}

func (s *store) GetPublishedBySlug(ctx context.Context, slug string) (core.Practice, error) {
	var practice core.Practice

	err := s.DB.WithContext(ctx).
		Where("slug = ? AND status = ?", slug, publishedStatus).
		First(&practice).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return core.Practice{}, core.ErrPracticeNotFound
	}
	if err != nil {
		return core.Practice{}, fmt.Errorf("get published practice by slug: %w", err)
	}

	return practice, nil
}
