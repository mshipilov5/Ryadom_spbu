package postgres

import (
	"context"
	"database/sql"
	"fmt"
	"time"

	gormpostgres "gorm.io/driver/postgres"
	"gorm.io/gorm"
	gormlogger "gorm.io/gorm/logger"
)

const (
	defaultMaxPoolSize  = 10
	defaultConnAttempts = 5
	defaultConnTimeout  = time.Second
)

// Postgres is the shared database dependency passed to every store.
type Postgres struct {
	maxPoolSize  int
	connAttempts int
	connTimeout  time.Duration

	DB    *gorm.DB
	sqlDB *sql.DB
}

// New opens a GORM connection to PostgreSQL and retries brief startup races.
func New(ctx context.Context, databaseURL string, opts ...Option) (*Postgres, error) {
	pg := &Postgres{
		maxPoolSize:  defaultMaxPoolSize,
		connAttempts: defaultConnAttempts,
		connTimeout:  defaultConnTimeout,
	}
	for _, option := range opts {
		option(pg)
	}

	var lastErr error
	for attempt := 1; attempt <= pg.connAttempts; attempt++ {
		db, err := gorm.Open(gormpostgres.Open(databaseURL), &gorm.Config{
			Logger: gormlogger.Default.LogMode(gormlogger.Silent),
		})
		if err == nil {
			sqlDB, sqlErr := db.DB()
			if sqlErr == nil {
				sqlDB.SetMaxOpenConns(pg.maxPoolSize)
				sqlDB.SetMaxIdleConns(pg.maxPoolSize)
				sqlDB.SetConnMaxLifetime(time.Hour)
				if pingErr := sqlDB.PingContext(ctx); pingErr == nil {
					pg.DB = db
					pg.sqlDB = sqlDB
					return pg, nil
				} else {
					sqlDB.Close()
					lastErr = pingErr
				}
			} else {
				lastErr = sqlErr
			}
		} else {
			lastErr = err
		}

		if attempt == pg.connAttempts {
			break
		}
		select {
		case <-ctx.Done():
			return nil, fmt.Errorf("connect to PostgreSQL: %w", ctx.Err())
		case <-time.After(pg.connTimeout):
		}
	}

	return nil, fmt.Errorf("connect to PostgreSQL after %d attempts: %w", pg.connAttempts, lastErr)
}

func (p *Postgres) SQLDB() *sql.DB {
	return p.sqlDB
}

func (p *Postgres) Close() error {
	return p.sqlDB.Close()
}
