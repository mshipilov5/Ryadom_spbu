# Backend «Рядом»

Первый backend-срез реализует публичный API психопросвета из
[`../api/openapi.yaml`](../api/openapi.yaml).

## Запуск

```bash
cd backend
docker compose up --build
```

Сервер будет доступен по адресу `http://localhost:8080`, PostgreSQL — только
внутри Docker-сети. При первом запуске приложение само применит миграции из
`internal/data/` и добавит безопасные тестовые статьи, категории и теги.

Для запуска без Docker сначала поднимите локальный PostgreSQL, затем задайте
`DATABASE_URL` по примеру из `.env.example` и выполните:

```bash
cd backend
go run ./cmd
```

Публичные endpoint'ы:

- `GET /api/v1/psychoeducation/materials`
- `GET /api/v1/psychoeducation/materials/{slug}`
- `GET /api/v1/psychoeducation/filters`
- `GET /health`
- `GET /ready`

Приложение использует PostgreSQL-store на GORM. `memoryStore` оставлен только
для изолированных HTTP-тестов и не используется при запуске приложения.
GORM не применяет схему автоматически: изменения схемы выполняются только
версионируемыми SQL-миграциями из `internal/data/`.

## Проверка

```bash
cd backend
go test ./...
go vet ./...
```
