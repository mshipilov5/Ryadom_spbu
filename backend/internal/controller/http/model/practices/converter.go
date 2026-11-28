package practices

import "github.com/mshipilov5/Ryadom_spbu/backend/internal/core"

func PreviewFromPractice(practice core.Practice) PracticePreviewResponse {
	tags := make([]string, 0, len(practice.Tags))
	tags = append(tags, practice.Tags...)

	return PracticePreviewResponse{
		Slug:            practice.Slug,
		Kind:            practice.Kind,
		Title:           practice.Title,
		Summary:         practice.Summary,
		DurationMinutes: practice.DurationMinutes,
		Tags:            tags,
	}
}

func DetailFromPractice(practice core.Practice) PracticeDetailResponse {
	return PracticeDetailResponse{
		PracticePreviewResponse: PreviewFromPractice(practice),
		Steps:                   practice.Steps,
		Boundaries:              practice.Boundaries,
	}
}
