package config

import "os"

type Config struct {
	HTTPAddr           string
	CORSAllowedOrigins string
	DatabaseURL        string
}

func FromEnv() Config {
	return Config{
		HTTPAddr:           envOrDefault("HTTP_ADDR", ":8080"),
		CORSAllowedOrigins: envOrDefault("CORS_ALLOWED_ORIGINS", "http://localhost:3000"),
		DatabaseURL:        envOrDefault("DATABASE_URL", "postgres://ryadom:ryadom@localhost:5432/ryadom?sslmode=disable"),
	}
}

func envOrDefault(key, fallback string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}

	return fallback
}
