package app

import (
	"context"
	"fmt"
	"log/slog"

	"github.com/gofiber/fiber/v2"
	"github.com/mshipilov5/Ryadom_spbu/backend/config"
	httpcontroller "github.com/mshipilov5/Ryadom_spbu/backend/internal/controller/http"
	"github.com/mshipilov5/Ryadom_spbu/backend/internal/migrate"
	educationservice "github.com/mshipilov5/Ryadom_spbu/backend/internal/service/education"
	educationstore "github.com/mshipilov5/Ryadom_spbu/backend/internal/store/education"
	"github.com/mshipilov5/Ryadom_spbu/backend/pkg/postgres"
)

func New(ctx context.Context, cfg config.Config, log *slog.Logger) (*fiber.App, func() error, error) {
	connection, err := postgres.New(ctx, cfg.DatabaseURL)
	if err != nil {
		return nil, nil, err
	}

	if err := migrate.Up(ctx, connection.SQLDB()); err != nil {
		connection.Close()
		return nil, nil, fmt.Errorf("run database migrations: %w", err)
	}

	store := educationstore.New(connection)
	service := educationservice.New(store)
	httpApp := fiber.New(fiber.Config{DisableStartupMessage: true})
	httpcontroller.NewRouter(httpApp, service, cfg.CORSAllowedOrigins, log)

	return httpApp, connection.Close, nil
}
