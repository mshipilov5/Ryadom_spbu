package http

import (
	"log/slog"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/mshipilov5/Ryadom_spbu/backend/internal/core"
)

type Router struct {
	app              *fiber.App
	educationService core.EducationService
	log              *slog.Logger
	corsOrigins      string
}

func NewRouter(app *fiber.App, educationService core.EducationService, corsOrigins string, log *slog.Logger) {
	router := &Router{
		app:              app,
		educationService: educationService,
		log:              log,
		corsOrigins:      corsOrigins,
	}

	router.initRequestMiddlewares()
	router.initRoutes()
	router.initResponseMiddlewares()
}

func (r *Router) initRoutes() {
	r.app.Get("/health", r.health)
	r.app.Get("/ready", r.ready)

	v1 := r.app.Group("/api/v1")

	// psychoeducation
	v1.Get("/psychoeducation/materials", r.getMaterials)
	v1.Get("/psychoeducation/materials/:slug", r.getMaterialBySlug)
	v1.Get("/psychoeducation/filters", r.getFilterOptions)
}

func (r *Router) initRequestMiddlewares() {
	r.app.Use(requestIDMiddleware)
	r.app.Use(logger.New(logger.Config{
		Format: "${time} | ${status} | ${method} ${path} | ${latency}\n",
	}))
	r.app.Use(cors.New(cors.Config{
		AllowOrigins: r.corsOrigins,
		AllowMethods: "GET, OPTIONS",
		AllowHeaders: "Content-Type, X-Request-ID",
	}))
}

func (r *Router) initResponseMiddlewares() {
	r.app.Use(func(ctx *fiber.Ctx) error {
		return writeError(ctx, fiber.StatusNotFound, "not_found", "Маршрут не найден")
	})
}

func (r *Router) health(ctx *fiber.Ctx) error {
	return ctx.Status(fiber.StatusOK).JSON(fiber.Map{"status": "ok"})
}

func (r *Router) ready(ctx *fiber.Ctx) error {
	return ctx.Status(fiber.StatusOK).JSON(fiber.Map{"status": "ready"})
}
