package http

import (
	"database/sql"
	"log/slog"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/mshipilov5/Ryadom_spbu/backend/internal/core"
	authservice "github.com/mshipilov5/Ryadom_spbu/backend/internal/service/auth"
)

type Router struct {
	auth             *authservice.Service
	authCookieSecure bool
	authDB           *sql.DB
	app              *fiber.App
	educationService core.EducationService
	practicesService core.PracticesService
	log              *slog.Logger
	corsOrigins      string
}

type RouterOption func(*Router)

func WithAuth(service *authservice.Service, secureCookie bool, db *sql.DB) RouterOption {
	return func(r *Router) {
		r.auth = service
		r.authCookieSecure = secureCookie
		r.authDB = db
	}
}

// WithPractices enables the public practices endpoints.
func WithPractices(service core.PracticesService) RouterOption {
	return func(r *Router) {
		r.practicesService = service
	}
}

func NewRouter(app *fiber.App, educationService core.EducationService, corsOrigins string, log *slog.Logger, options ...RouterOption) {
	router := &Router{
		app:              app,
		educationService: educationService,
		log:              log,
		corsOrigins:      corsOrigins,
	}
	for _, option := range options {
		option(router)
	}

	router.initRequestMiddlewares()
	router.initRoutes()
	router.initResponseMiddlewares()
}

func (r *Router) initRoutes() {
	r.app.Get("/health", r.health)
	r.app.Get("/ready", r.ready)

	v1 := r.app.Group("/api/v1")
	v1.Get("/home", r.getHome)

	// psychoeducation
	v1.Get("/psychoeducation/materials", r.getMaterials)
	v1.Get("/psychoeducation/materials/:slug", r.getMaterialBySlug)
	v1.Get("/psychoeducation/filters", r.getFilterOptions)

	if r.auth != nil {
		r.mountAuth(v1)
	}
	if r.authDB != nil {
		r.mountSubmissions(v1, r.authDB)
		r.mountEvents(v1, r.authDB)
	}

	// practices (mounted only when WithPractices is provided)
	if r.practicesService != nil {
		v1.Get("/practices", r.getPractices)
		v1.Get("/practices/:slug", r.getPracticeBySlug)
	}
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
