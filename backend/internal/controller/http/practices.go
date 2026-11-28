package http

import (
	"strings"

	"github.com/gofiber/fiber/v2"
	practicesmodel "github.com/mshipilov5/Ryadom_spbu/backend/internal/controller/http/model/practices"
	"github.com/mshipilov5/Ryadom_spbu/backend/internal/core"
)

func (r *Router) getPractices(ctx *fiber.Ctx) error {
	options, err := practiceListOptionsFromContext(ctx)
	if err != nil {
		return writeError(ctx, fiber.StatusBadRequest, "invalid_query", err.Error())
	}

	items, err := r.practicesService.ListPublished(ctx.UserContext(), options)
	if err != nil {
		return r.writeServiceError(ctx, err)
	}

	response := make([]practicesmodel.PracticePreviewResponse, 0, len(items))
	for _, practice := range items {
		response = append(response, practicesmodel.PreviewFromPractice(practice))
	}

	return ctx.Status(fiber.StatusOK).JSON(practicesmodel.PracticeListResponse{
		Items: response,
		Total: len(response),
	})
}

func (r *Router) getPracticeBySlug(ctx *fiber.Ctx) error {
	slug := ctx.Params("slug")
	if !slugPattern.MatchString(slug) {
		return writeError(ctx, fiber.StatusNotFound, "practice_not_found", "Практика не найдена")
	}

	practice, err := r.practicesService.GetPublishedBySlug(ctx.UserContext(), slug)
	if err != nil {
		return r.writeServiceError(ctx, err)
	}

	return ctx.Status(fiber.StatusOK).JSON(practicesmodel.DetailFromPractice(practice))
}

func practiceListOptionsFromContext(ctx *fiber.Ctx) (core.PracticeListOptions, error) {
	query := ctx.Context().QueryArgs()

	search := strings.TrimSpace(string(query.Peek("q")))
	if len(search) > 100 {
		return core.PracticeListOptions{}, core.ValidationError{Message: "Параметр q не должен быть длиннее 100 символов"}
	}

	kind := string(query.Peek("kind"))

	return core.PracticeListOptions{
		Query: search,
		Kind:  kind,
	}, nil
}
