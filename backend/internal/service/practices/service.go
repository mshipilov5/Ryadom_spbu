package practices

import (
	"context"
	"strings"

	"github.com/mshipilov5/Ryadom_spbu/backend/internal/core"
)

type service struct {
	store core.PracticesStore
}

func New(store core.PracticesStore) core.PracticesService {
	return &service{store: store}
}

func (s *service) ListPublished(ctx context.Context, options core.PracticeListOptions) ([]core.Practice, error) {
	if options.Kind != "" {
		if _, ok := core.PracticeKinds[options.Kind]; !ok {
			return nil, core.ValidationError{Message: "Параметр kind имеет недопустимое значение"}
		}
	}

	practices, err := s.store.ListPublished(ctx)
	if err != nil {
		return nil, err
	}

	filtered := make([]core.Practice, 0, len(practices))
	for _, practice := range practices {
		if options.Kind != "" && practice.Kind != options.Kind {
			continue
		}
		if !matchesQuery(practice, options.Query) {
			continue
		}

		filtered = append(filtered, practice)
	}

	return filtered, nil
}

func (s *service) GetPublishedBySlug(ctx context.Context, slug string) (core.Practice, error) {
	return s.store.GetPublishedBySlug(ctx, slug)
}

func matchesQuery(practice core.Practice, query string) bool {
	query = strings.ToLower(strings.TrimSpace(query))
	if query == "" {
		return true
	}

	searchable := strings.ToLower(strings.Join(
		append([]string{practice.Title, practice.Summary}, practice.Tags...),
		" ",
	))

	return strings.Contains(searchable, query)
}
