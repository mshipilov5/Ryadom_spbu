package http

import (
	"regexp"
	"strings"

	"github.com/gofiber/fiber/v2"
	educationmodel "github.com/mshipilov5/Ryadom_spbu/backend/internal/controller/http/model/education"
	"github.com/mshipilov5/Ryadom_spbu/backend/internal/core"
)

var slugPattern = regexp.MustCompile(`^[a-z0-9]+(?:-[a-z0-9]+)*$`)

// getMaterials returns published psychoeducation materials with optional filters.
func (r *Router) getMaterials(ctx *fiber.Ctx) error {
	options, err := listOptionsFromContext(ctx)
	if err != nil {
		return writeError(ctx, fiber.StatusBadRequest, "invalid_query", err.Error())
	}

	articles, err := r.educationService.ListPublished(ctx.UserContext(), options)
	if err != nil {
		return r.writeServiceError(ctx, err)
	}

	items := make([]educationmodel.MaterialPreviewResponse, 0, len(articles))
	for _, article := range articles {
		items = append(items, educationmodel.PreviewFromArticle(article))
	}

	return ctx.Status(fiber.StatusOK).JSON(educationmodel.MaterialListResponse{
		Items: items,
		Total: len(items),
	})
}

// getMaterialBySlug returns one published material by its public slug.
func (r *Router) getMaterialBySlug(ctx *fiber.Ctx) error {
	slug := ctx.Params("slug")
	if !slugPattern.MatchString(slug) {
		return writeError(ctx, fiber.StatusNotFound, "material_not_found", "Материал не найден")
	}

	article, err := r.educationService.GetPublishedBySlug(ctx.UserContext(), slug)
	if err != nil {
		return r.writeServiceError(ctx, err)
	}

	return ctx.Status(fiber.StatusOK).JSON(educationmodel.DetailFromArticle(article))
}

// getFilterOptions returns category and tag options available in the public catalog.
func (r *Router) getFilterOptions(ctx *fiber.Ctx) error {
	options, err := r.educationService.GetFilterOptions(ctx.UserContext())
	if err != nil {
		return r.writeServiceError(ctx, err)
	}

	return ctx.Status(fiber.StatusOK).JSON(educationmodel.FilterOptionsFromCore(options))
}

func listOptionsFromContext(ctx *fiber.Ctx) (core.ListOptions, error) {
	query := ctx.Context().QueryArgs()
	search := strings.TrimSpace(string(query.Peek("q")))
	if len(search) > 100 {
		return core.ListOptions{}, core.ValidationError{Message: "Параметр q не должен быть длиннее 100 символов"}
	}

	category := string(query.Peek("category"))
	if category != "" && !slugPattern.MatchString(category) {
		return core.ListOptions{}, core.ValidationError{Message: "Параметр category имеет недопустимое значение"}
	}

	rawTags := query.PeekMulti("tags")
	tags := make([]string, 0, len(rawTags))
	for _, rawTag := range rawTags {
		tag := string(rawTag)
		if !slugPattern.MatchString(tag) {
			return core.ListOptions{}, core.ValidationError{Message: "Параметр tags имеет недопустимое значение"}
		}
		tags = append(tags, tag)
	}

	contentType := string(query.Peek("type"))
	if contentType != "" && contentType != core.ContentTypeArticle {
		return core.ListOptions{}, core.ValidationError{Message: "Параметр type должен быть равен article"}
	}

	return core.ListOptions{
		Query:    search,
		Category: category,
		Tags:     tags,
		Type:     contentType,
	}, nil
}
