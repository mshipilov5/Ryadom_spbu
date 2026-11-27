package app

import (
	"context"
	"fmt"
	"log/slog"

	"github.com/gofiber/fiber/v2"
	"github.com/mshipilov5/Ryadom_spbu/backend/config"
	httpcontroller "github.com/mshipilov5/Ryadom_spbu/backend/internal/controller/http"
	"github.com/mshipilov5/Ryadom_spbu/backend/internal/migrate"
<<<<<<< HEAD
	authservice "github.com/mshipilov5/Ryadom_spbu/backend/internal/service/auth"
=======
>>>>>>> 85fb3de (fix(practices): wire practices service into app)
	educationservice "github.com/mshipilov5/Ryadom_spbu/backend/internal/service/education"
	practicesservice "github.com/mshipilov5/Ryadom_spbu/backend/internal/service/practices"
	authstore "github.com/mshipilov5/Ryadom_spbu/backend/internal/store/auth"
	educationstore "github.com/mshipilov5/Ryadom_spbu/backend/internal/store/education"
	practicesstore "github.com/mshipilov5/Ryadom_spbu/backend/internal/store/practices"
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

	practicesStore := practicesstore.New(connection)
	practicesService := practicesservice.New(practicesStore)

	auth := authservice.New(authstore.New(connection.SQLDB()))
	if err := auth.BootstrapAdmin(ctx, cfg.AuthBootstrapAdminUsername, cfg.AuthBootstrapAdminPassword); err != nil {
		connection.Close()
		return nil, nil, fmt.Errorf("bootstrap auth administrator: %w", err)
	}

	httpApp := fiber.New(fiber.Config{DisableStartupMessage: true})
	httpcontroller.NewRouter(
		httpApp, service, cfg.CORSAllowedOrigins, log,
		httpcontroller.WithAuth(auth, cfg.AuthCookieSecure, connection.SQLDB()),
		httpcontroller.WithPractices(practicesService),
	)

	return httpApp, connection.Close, nil
}
