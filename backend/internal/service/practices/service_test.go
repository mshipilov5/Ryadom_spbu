package practices_test

import (
	"context"
	"errors"
	"testing"

	"github.com/mshipilov5/Ryadom_spbu/backend/internal/core"
	practices "github.com/mshipilov5/Ryadom_spbu/backend/internal/service/practices"
)

func TestListPublishedFiltersByKind(t *testing.T) {
	store := &stubStore{practices: []core.Practice{
		{Slug: "long-exhale", Kind: core.PracticeKindBreathing, Title: "Спокойный длинный выдох"},
		{Slug: "five-four-three-two-one", Kind: core.PracticeKindGrounding, Title: "5–4–3–2–1"},
	}}
	svc := practices.New(store)

	result, err := svc.ListPublished(context.Background(), core.PracticeListOptions{Kind: core.PracticeKindBreathing})
	if err != nil {
		t.Fatalf("ListPublished error: %v", err)
	}
	if len(result) != 1 || result[0].Slug != "long-exhale" {
		t.Fatalf("want only long-exhale, got %#v", result)
	}
}

func TestListPublishedSearchesTitleSummaryAndTags(t *testing.T) {
	store := &stubStore{practices: []core.Practice{
		{
			Slug:    "long-exhale",
			Kind:    core.PracticeKindBreathing,
			Title:   "Спокойный длинный выдох",
			Summary: "Короткая дыхательная практика",
			Tags:    []string{"напряжение", "пауза", "дыхание"},
		},
		{
			Slug:    "exam-checklist",
			Kind:    core.PracticeKindChecklist,
			Title:   "Чек-лист перед экзаменом",
			Summary: "Бытовые пункты перед экзаменом",
			Tags:    []string{"экзамены", "учёба"},
		},
	}}
	svc := practices.New(store)

	// «дыхание» есть только в тегах первой практики.
	result, err := svc.ListPublished(context.Background(), core.PracticeListOptions{Query: "  ДЫХАНИЕ "})
	if err != nil {
		t.Fatalf("ListPublished error: %v", err)
	}
	if len(result) != 1 || result[0].Slug != "long-exhale" {
		t.Fatalf("want only long-exhale, got %#v", result)
	}
}

func TestListPublishedRejectsUnknownKind(t *testing.T) {
	svc := practices.New(&stubStore{})

	_, err := svc.ListPublished(context.Background(), core.PracticeListOptions{Kind: "unknown"})
	var validationErr core.ValidationError
	if !errors.As(err, &validationErr) {
		t.Fatalf("want ValidationError, got %v", err)
	}
}

type stubStore struct {
	practices []core.Practice
	err       error
}

func (s *stubStore) ListPublished(context.Context) ([]core.Practice, error) {
	return s.practices, s.err
}

func (s *stubStore) GetPublishedBySlug(_ context.Context, slug string) (core.Practice, error) {
	for _, p := range s.practices {
		if p.Slug == slug {
			return p, nil
		}
	}
	return core.Practice{}, core.ErrPracticeNotFound
}
