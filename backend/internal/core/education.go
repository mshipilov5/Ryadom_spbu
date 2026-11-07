package core

import "context"

type EducationStore interface {
	ListPublished(ctx context.Context) ([]Article, error)
	GetPublishedBySlug(ctx context.Context, slug string) (Article, error)
}

type EducationService interface {
	ListPublished(ctx context.Context, options ListOptions) ([]Article, error)
	GetPublishedBySlug(ctx context.Context, slug string) (Article, error)
	GetFilterOptions(ctx context.Context) (FilterOptions, error)
}

type FilterOptions struct {
	Types      []string
	Categories []Category
	Tags       []Tag
}
