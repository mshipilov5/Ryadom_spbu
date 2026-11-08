package education

import (
	"context"
	"strings"

	"github.com/mshipilov5/Ryadom_spbu/backend/internal/core"
)

type service struct {
	store core.EducationStore
}

func New(store core.EducationStore) core.EducationService {
	return &service{store: store}
}

func (s *service) ListPublished(ctx context.Context, options core.ListOptions) ([]core.Article, error) {
	if options.Type != "" && options.Type != core.ContentTypeArticle {
		return nil, core.ValidationError{Message: "Параметр type должен быть равен article"}
	}

	articles, err := s.store.ListPublished(ctx)
	if err != nil {
		return nil, err
	}

	filtered := make([]core.Article, 0, len(articles))
	for _, article := range articles {
		if options.Category != "" && article.Category.Slug != options.Category {
			continue
		}
		if !matchesAllTags(article.Tags, options.Tags) {
			continue
		}
		if !matchesQuery(article, options.Query) {
			continue
		}

		filtered = append(filtered, article)
	}

	return filtered, nil
}

func (s *service) GetPublishedBySlug(ctx context.Context, slug string) (core.Article, error) {
	return s.store.GetPublishedBySlug(ctx, slug)
}

func (s *service) GetFilterOptions(ctx context.Context) (core.FilterOptions, error) {
	articles, err := s.store.ListPublished(ctx)
	if err != nil {
		return core.FilterOptions{}, err
	}

	categories := make([]core.Category, 0)
	tags := make([]core.Tag, 0)
	categorySeen := make(map[string]struct{})
	tagSeen := make(map[string]struct{})

	for _, article := range articles {
		if _, exists := categorySeen[article.Category.Slug]; !exists {
			categories = append(categories, article.Category)
			categorySeen[article.Category.Slug] = struct{}{}
		}

		for _, tag := range article.Tags {
			if _, exists := tagSeen[tag.Slug]; !exists {
				tags = append(tags, tag)
				tagSeen[tag.Slug] = struct{}{}
			}
		}
	}

	return core.FilterOptions{
		Types:      []string{core.ContentTypeArticle},
		Categories: categories,
		Tags:       tags,
	}, nil
}

func matchesQuery(article core.Article, query string) bool {
	query = strings.ToLower(strings.TrimSpace(query))
	if query == "" {
		return true
	}

	return strings.Contains(strings.ToLower(article.Title), query) ||
		strings.Contains(strings.ToLower(article.Summary), query)
}

func matchesAllTags(tags []core.Tag, requested []string) bool {
	for _, requestedTag := range requested {
		found := false
		for _, tag := range tags {
			if tag.Slug == requestedTag {
				found = true
				break
			}
		}

		if !found {
			return false
		}
	}

	return true
}
