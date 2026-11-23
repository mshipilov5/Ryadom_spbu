# Issue #154 — интеграция каталога психопросвета с API

- Клиентская загрузка каталога с debounce поисковой строки и отменой устаревших запросов.
- Поиск: `q`, `type`, `category`, многозначный `tags` (all tags, в соответствии с контрактом).
- Фильтры загружаются с API.
- Статья загружается server-side, 404 показывает страницу «Материал не найден», 503/500 — безопасный текст.
- Прокси Next.js скрывает backend адрес и не передаёт пользователю внутренний текст ошибок.
- `PSYCHO_API_BASE_URL` задаётся в `.env.local`; моковых данных в runtime нет.

## ВАЖНО: расхождение Issue и действующего main/OpenAPI

Issue #154 говорит про `/api/v1/materials`, `material-categories`, `material-tags`, `tag` и тип `practice`, а **существующий** `api/openapi.yaml` в main называет `/api/v1/psychoeducation/materials`, `/api/v1/psychoeducation/filters`, множественное `tags` и только `article`. Этот код соответствует фактическому контракту на main (без его изменения), следовательно поддержку `practice` нельзя считать готовой без согласования API.

Для проверки backend должен быть доступен по `http://localhost:8080` или установите `PSYCHO_API_BASE_URL` в frontend/.env.local.

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```
Открой `/psychoeducation`; проверь DevTools Network: `GET /api/public-psychoeducation/filters`, `GET /api/public-psychoeducation/materials`, затем материал `/psychoeducation/exam-stress`. Без backend ожидается error-state, а не фальшивое «успешное API подключено».
