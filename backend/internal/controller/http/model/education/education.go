package education

import "time"

type MaterialListResponse struct {
	Items []MaterialPreviewResponse `json:"items"`
	Total int                       `json:"total"`
}

type MaterialPreviewResponse struct {
	Slug            string           `json:"slug"`
	Title           string           `json:"title"`
	Summary         string           `json:"summary"`
	ImageURL        *string          `json:"imageUrl"`
	Category        CategoryResponse `json:"category"`
	Tags            []TagResponse    `json:"tags"`
	Type            string           `json:"type"`
	DurationMinutes int              `json:"durationMinutes"`
	ContentWarning  *string          `json:"contentWarning"`
}

type MaterialDetailResponse struct {
	MaterialPreviewResponse
	Body       string           `json:"body"`
	Sources    []SourceResponse `json:"sources"`
	Author     string           `json:"author"`
	Reviewer   string           `json:"reviewer"`
	ReviewedAt time.Time        `json:"reviewedAt"`
}

type CategoryResponse struct {
	Slug string `json:"slug"`
	Name string `json:"name"`
}

type TagResponse struct {
	Slug string `json:"slug"`
	Name string `json:"name"`
}

type SourceResponse struct {
	Title string `json:"title"`
	URL   string `json:"url"`
}

type FilterOptionsResponse struct {
	Types      []string           `json:"types"`
	Categories []CategoryResponse `json:"categories"`
	Tags       []TagResponse      `json:"tags"`
}
