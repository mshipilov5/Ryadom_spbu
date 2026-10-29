package migrate

import (
	"context"
	"database/sql"
	"fmt"

	"github.com/mshipilov5/Ryadom_spbu/backend/internal/data"
)

type migration struct {
	version string
	upSQL   string
}

var migrations = []migration{
	{version: "000001", upSQL: data.InitialUp},
}

func Up(ctx context.Context, db *sql.DB) error {
	if _, err := db.ExecContext(ctx, `
		CREATE TABLE IF NOT EXISTS schema_migrations (
			version VARCHAR(64) PRIMARY KEY,
			applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
		)
	`); err != nil {
		return fmt.Errorf("create migrations table: %w", err)
	}

	for _, migration := range migrations {
		var applied bool
		if err := db.QueryRowContext(
			ctx,
			`SELECT EXISTS (SELECT 1 FROM schema_migrations WHERE version = $1)`,
			migration.version,
		).Scan(&applied); err != nil {
			return fmt.Errorf("check migration %s: %w", migration.version, err)
		}
		if applied {
			continue
		}

		tx, err := db.BeginTx(ctx, nil)
		if err != nil {
			return fmt.Errorf("start migration %s: %w", migration.version, err)
		}

		if _, err := tx.ExecContext(ctx, migration.upSQL); err != nil {
			tx.Rollback()
			return fmt.Errorf("apply migration %s: %w", migration.version, err)
		}
		if _, err := tx.ExecContext(ctx, `INSERT INTO schema_migrations (version) VALUES ($1)`, migration.version); err != nil {
			tx.Rollback()
			return fmt.Errorf("mark migration %s as applied: %w", migration.version, err)
		}
		if err := tx.Commit(); err != nil {
			return fmt.Errorf("commit migration %s: %w", migration.version, err)
		}
	}

	return nil
}
