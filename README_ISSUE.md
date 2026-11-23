# Issue #94 — Каталог практик

Переиспользован ранее созданный самостоятельный frontend: `/practices` + `/practices/[slug]`, 10 практик пяти типов, поиск, фильтр, loading/empty/error/many, мобильный UI.

```bash
cd frontend
npm install
npm run dev
```
Проверить: `/practices`, `?state=loading`, `?state=empty`, `?state=error`, `?state=many`, `/practices/long-exhale`.

API не подключён; структура `frontend/src/modules/practices` не имеет импортов других frontend модулей.
