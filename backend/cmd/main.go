package main

import (
	"context"
	"log/slog"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/mshipilov5/Ryadom_spbu/backend/config"
	"github.com/mshipilov5/Ryadom_spbu/backend/internal/app"
	"github.com/mshipilov5/Ryadom_spbu/backend/pkg/logger"
)

func main() {
	cfg := config.FromEnv()
	log := logger.New()
	startupContext, startupCancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer startupCancel()

	httpApp, closeDatabase, err := app.New(startupContext, cfg, log)
	if err != nil {
		log.Error("application startup failed", slog.Any("error", err))
		os.Exit(1)
	}
	defer func() {
		if err := closeDatabase(); err != nil {
			log.Error("database connection close failed", slog.Any("error", err))
		}
	}()

	listenErrors := make(chan error, 1)
	go func() {
		log.Info("HTTP server started", slog.String("address", cfg.HTTPAddr))
		listenErrors <- httpApp.Listen(cfg.HTTPAddr)
	}()

	stop := make(chan os.Signal, 1)
	signal.Notify(stop, syscall.SIGINT, syscall.SIGTERM)

	select {
	case err := <-listenErrors:
		if err != nil {
			log.Error("HTTP server failed to start", slog.Any("error", err))
			os.Exit(1)
		}
		return
	case <-stop:
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	if err := httpApp.ShutdownWithContext(ctx); err != nil {
		log.Error("graceful shutdown failed", slog.Any("error", err))
	}

	// Fiber's Listen may return a closed-listener error after a normal shutdown.
	// The signal path is already handled above, so that result is intentionally ignored.
	<-listenErrors
}
