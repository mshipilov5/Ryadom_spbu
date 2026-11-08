package education

import "github.com/mshipilov5/Ryadom_spbu/backend/internal/core"

func PreviewFromArticle(article core.Article) MaterialPreviewResponse {
	tags := make([]TagResponse, 0, len(article.Tags))
	for _, tag := range article.Tags {
		tags = append(tags, TagResponse{Slug: tag.Slug, Name: tag.Name})
	}

	return MaterialPreviewResponse{
		Slug:            article.Slug,
		Title:           article.Title,
		Summary:         article.Summary,
		ImageURL:        article.ImageURL,
		Category:        CategoryResponse{Slug: article.Category.Slug, Name: article.Category.Name},
		Tags:            tags,
		Type:            article.Type,
		DurationMinutes: article.DurationMinutes,
		ContentWarning:  article.ContentWarning,
	}
}

func DetailFromArticle(article core.Article) MaterialDetailResponse {
	sources := make([]SourceResponse, 0, len(article.Sources))
	for _, source := range article.Sources {
		sources = append(sources, SourceResponse{Title: source.Title, URL: source.URL})
	}

	return MaterialDetailResponse{
		MaterialPreviewResponse: PreviewFromArticle(article),
		Body:                    article.Body,
		Sources:                 sources,
		Author:                  article.Author,
		Reviewer:                article.Reviewer,
		ReviewedAt:              article.ReviewedAt,
	}
}

func FilterOptionsFromCore(options core.FilterOptions) FilterOptionsResponse {
	categories := make([]CategoryResponse, 0, len(options.Categories))
	for _, category := range options.Categories {
		categories = append(categories, CategoryResponse{Slug: category.Slug, Name: category.Name})
	}

	tags := make([]TagResponse, 0, len(options.Tags))
	for _, tag := range options.Tags {
		tags = append(tags, TagResponse{Slug: tag.Slug, Name: tag.Name})
	}

	return FilterOptionsResponse{
		Types:      options.Types,
		Categories: categories,
		Tags:       tags,
	}
}
