package core

import "time"

const ContentTypeArticle = "article"

type Category struct {
	ID   int64  `gorm:"column:id;primaryKey;autoIncrement"`
	Slug string `gorm:"column:slug"`
	Name string `gorm:"column:name"`
}

type Tag struct {
	ID   int64  `gorm:"column:id;primaryKey;autoIncrement"`
	Slug string `gorm:"column:slug"`
	Name string `gorm:"column:name"`
}

type Source struct {
	ID         int64  `gorm:"column:id;primaryKey;autoIncrement"`
	MaterialID int64  `gorm:"column:material_id"`
	Title      string `gorm:"column:title"`
	URL        string `gorm:"column:url"`
	Position   int    `gorm:"column:position"`
}

type Article struct {
	ID              int64      `gorm:"column:id;primaryKey;autoIncrement"`
	Slug            string     `gorm:"column:slug"`
	Type            string     `gorm:"column:type"`
	Title           string     `gorm:"column:title"`
	Summary         string     `gorm:"column:summary"`
	ImageURL        *string    `gorm:"column:image_url"`
	CategoryID      int64      `gorm:"column:category_id"`
	Category        Category   `gorm:"foreignKey:CategoryID"`
	Tags            []Tag      `gorm:"many2many:material_tag_links;foreignKey:ID;references:ID;joinForeignKey:MaterialID;joinReferences:TagID"`
	DurationMinutes int        `gorm:"column:duration_minutes"`
	ContentWarning  *string    `gorm:"column:content_warning"`
	Body            string     `gorm:"column:body"`
	Sources         []Source   `gorm:"foreignKey:MaterialID"`
	Author          string     `gorm:"column:author"`
	Reviewer        string     `gorm:"column:reviewer"`
	ReviewedAt      time.Time  `gorm:"column:reviewed_at"`
	PublishedAt     *time.Time `gorm:"column:published_at"`
	Published       bool       `gorm:"-"`
}

type ListOptions struct {
	Query    string
	Category string
	Tags     []string
	Type     string
}

func (Article) TableName() string {
	return "materials"
}

func (Category) TableName() string {
	return "material_categories"
}

func (Tag) TableName() string {
	return "material_tags"
}

func (Source) TableName() string {
	return "material_sources"
}
