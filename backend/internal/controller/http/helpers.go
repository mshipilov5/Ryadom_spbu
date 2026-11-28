package http

import (
	"crypto/rand"
	"encoding/hex"
	"errors"
	"log/slog"

	"github.com/gofiber/fiber/v2"
	"github.com/mshipilov5/Ryadom_spbu/backend/internal/core"
)

const requestIDKey = "requestID"

type apiErrorResponse struct {
	Code      string  `json:"code"`
	Message   string  `json:"message"`
	RequestID *string `json:"requestId"`
}

func requestIDMiddleware(ctx *fiber.Ctx) error {
	requestID := ctx.Get("X-Request-ID")
	if requestID == "" {
		requestID = newRequestID()
	}

	ctx.Locals(requestIDKey, requestID)
	ctx.Set("X-Request-ID", requestID)

	return ctx.Next()
}

func writeError(ctx *fiber.Ctx, status int, code string, message string) error {
	return ctx.Status(status).JSON(newErrorResponse(ctx, code, message))
}

func newErrorResponse(ctx *fiber.Ctx, code, message string) apiErrorResponse {
	requestID, _ := ctx.Locals(requestIDKey).(string)
	var requestIDPointer *string
	if requestID != "" {
		requestIDPointer = &requestID
	}

	return apiErrorResponse{
		Code:      code,
		Message:   message,
		RequestID: requestIDPointer,
	}
}

func (r *Router) writeServiceError(ctx *fiber.Ctx, err error) error {
	var validationError core.ValidationError
	if errors.As(err, &validationError) {
		return writeError(ctx, fiber.StatusBadRequest, "invalid_query", validationError.Message)
	}
	if errors.Is(err, core.ErrArticleNotFound) {
		return writeError(ctx, fiber.StatusNotFound, "material_not_found", "Материал не найден")
	}
	if errors.Is(err, core.ErrPracticeNotFound) {
		return writeError(ctx, fiber.StatusNotFound, "practice_not_found", "Практика не найдена")
	}

	r.log.Error("request failed", slog.String("path", ctx.Path()), slog.Any("error", err))
	return writeError(ctx, fiber.StatusInternalServerError, "internal_error", "Не удалось обработать запрос. Повторите попытку позже.")
}

func newRequestID() string {
	bytes := make([]byte, 12)
	if _, err := rand.Read(bytes); err != nil {
		return "generated-request-id"
	}

	return hex.EncodeToString(bytes)
}
