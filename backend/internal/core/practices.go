package core

import "context"

// PracticesStore — контракт слоя хранения. Реализуется в internal/store/practices.
type PracticesStore interface {
	ListPublished(ctx context.Context) ([]Practice, error)
	GetPublishedBySlug(ctx context.Context, slug string) (Practice, error)
}

// PracticesService — контракт слоя бизнес-логики. Реализуется в internal/service/practices.
type PracticesService interface {
	ListPublished(ctx context.Context, options PracticeListOptions) ([]Practice, error)
	GetPublishedBySlug(ctx context.Context, slug string) (Practice, error)
}
