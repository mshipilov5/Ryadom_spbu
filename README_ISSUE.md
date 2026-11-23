# Issue #140 — Интеграция главной с API

Есть функциональный API-adapter и UI loading/error/retry; demo-режим включается **только** через `HOME_API_MODE=demo` в dev.

**Блокер внешней зависимости:** текущий `main/api/openapi.yaml` не содержит ни одного endpoint главной страницы. Поэтому точный `HOME_API_PATH` нельзя достоверно выбрать; он вынесен в env, OpenAPI не меняется. UI работает в автономном demo, интеграцию с реальным backend нужно проверить после согласования контракта.

Запуск: `cd frontend && cp .env.example .env.local && npm install && npm run dev`.
Для настоящего API уберите `HOME_API_MODE`, задайте `HOME_API_URL`, `HOME_API_PATH`, затем проверьте 200/404/500/timeout в Network.
