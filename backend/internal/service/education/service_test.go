package education_test

import (
	"context"
	"errors"
	"testing"

	"github.com/mshipilov5/Ryadom_spbu/backend/internal/core"
	education "github.com/mshipilov5/Ryadom_spbu/backend/internal/service/education"
)

func TestListPublishedFiltersByQueryCategoryAndAllTags(t *testing.T) {
	store := &stubStore{articles: []core.Article{
		{
			Slug:     "exam-stress",
			Title:    "Как пережить экзаменационный стресс",
			Summary:  "Безопасные шаги при высокой учебной нагрузке.",
			Category: core.Category{Slug: "study", Name: "Учёба"},
			Tags:     []core.Tag{{Slug: "stress", Name: "Стресс"}, {Slug: "exams", Name: "Экзамены"}},
		},
		{
			Slug:     "sleep-reset",
			Title:    "Возвращаем режим сна",
			Summary:  "Небольшие шаги для сна.",
			Category: core.Category{Slug: "wellbeing", Name: "Самочувствие"},
			Tags:     []core.Tag{{Slug: "sleep", Name: "Сон"}},
		},
	}}
	service := education.New(store)

	articles, err := service.ListPublished(context.Background(), core.ListOptions{
		Query:    "  стресс ",
		Category: "study",
		Tags:     []string{"stress", "exams"},
	})
	if err != nil {
		t.Fatalf("ListPublished returned an error: %v", err)
	}
	if len(articles) != 1 || articles[0].Slug != "exam-stress" {
		t.Fatalf("ListPublished = %#v, want only exam-stress", articles)
	}
}

func TestListPublishedRejectsUnknownType(t *testing.T) {
	service := education.New(&stubStore{})

	_, err := service.ListPublished(context.Background(), core.ListOptions{Type: "video"})
	var validationError core.ValidationError
	if !errors.As(err, &validationError) {
		t.Fatalf("ListPublished error = %v, want ValidationError", err)
	}
}

func TestGetFilterOptionsReturnsOnlyAvailableMetadata(t *testing.T) {
	service := education.New(&stubStore{articles: []core.Article{
		{
			Category: core.Category{Slug: "study", Name: "Учёба"},
			Tags:     []core.Tag{{Slug: "stress", Name: "Стресс"}},
		},
		{
			Category: core.Category{Slug: "study", Name: "Учёба"},
			Tags:     []core.Tag{{Slug: "stress", Name: "Стресс"}, {Slug: "exams", Name: "Экзамены"}},
		},
	}})

	options, err := service.GetFilterOptions(context.Background())
	if err != nil {
		t.Fatalf("GetFilterOptions returned an error: %v", err)
	}
	if len(options.Types) != 1 || options.Types[0] != core.ContentTypeArticle {
		t.Fatalf("Types = %#v, want [article]", options.Types)
	}
	if len(options.Categories) != 1 || options.Categories[0].Slug != "study" {
		t.Fatalf("Categories = %#v, want only study", options.Categories)
	}
	if len(options.Tags) != 2 {
		t.Fatalf("Tags = %#v, want two unique tags", options.Tags)
	}
}

type stubStore struct {
	articles []core.Article
	err      error
}

func (s *stubStore) ListPublished(context.Context) ([]core.Article, error) {
	return s.articles, s.err
}

func (s *stubStore) GetPublishedBySlug(_ context.Context, slug string) (core.Article, error) {
	for _, article := range s.articles {
		if article.Slug == slug {
			return article, nil
		}
	}

	return core.Article{}, core.ErrArticleNotFound
}
