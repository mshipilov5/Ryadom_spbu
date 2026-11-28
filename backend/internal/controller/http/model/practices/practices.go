package practices

type PracticeListResponse struct {
	Items []PracticePreviewResponse `json:"items"`
	Total int                       `json:"total"`
}

type PracticePreviewResponse struct {
	Slug            string   `json:"slug"`
	Kind            string   `json:"kind"`
	Title           string   `json:"title"`
	Summary         string   `json:"summary"`
	DurationMinutes int      `json:"durationMinutes"`
	Tags            []string `json:"tags"`
}

type PracticeDetailResponse struct {
	PracticePreviewResponse
	Steps      []string `json:"steps"`
	Boundaries []string `json:"boundaries"`
}
