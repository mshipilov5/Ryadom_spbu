package core

import "time"

// Виды практик. Значения совпадают с enum PracticeKind в API-контракте.
const (
	PracticeKindBreathing   = "breathing"
	PracticeKindGrounding   = "grounding"
	PracticeKindStress      = "stress"
	PracticeKindMindfulness = "mindfulness"
	PracticeKindChecklist   = "checklist"
)

// PracticeKinds — множество допустимых видов для быстрой проверки входного kind.
var PracticeKinds = map[string]struct{}{
	PracticeKindBreathing:   {},
	PracticeKindGrounding:   {},
	PracticeKindStress:      {},
	PracticeKindMindfulness: {},
	PracticeKindChecklist:   {},
}

// Practice — доменная сущность практики. Одна запись в БД.
// Разделение на preview/detail выполняется на слое HTTP, не здесь.
type Practice struct {
	ID              int64      `gorm:"column:id;primaryKey;autoIncrement"`
	Slug            string     `gorm:"column:slug"`
	Kind            string     `gorm:"column:kind"`
	Title           string     `gorm:"column:title"`
	Summary         string     `gorm:"column:summary"`
	DurationMinutes int        `gorm:"column:duration_minutes"`
	Tags            []string   `gorm:"column:tags;type:jsonb;serializer:json"`
	Steps           []string   `gorm:"column:steps;type:jsonb;serializer:json"`
	Boundaries      []string   `gorm:"column:boundaries;type:jsonb;serializer:json"`
	Status          string     `gorm:"column:status"`
	PublishedAt     *time.Time `gorm:"column:published_at"`
}

// PracticeListOptions — входные фильтры каталога.
type PracticeListOptions struct {
	Query string
	Kind  string
}

func (Practice) TableName() string {
	return "practices"
}
