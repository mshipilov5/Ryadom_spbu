# Issue #128 — только файлы для PR

Этот ZIP **не является самостоятельным Next.js-проектом**. В него включён **только** новый модуль состояний и документация:

```text
frontend/src/app/(public)/ui-states/
frontend/src/modules/ui-states/
docs/UX_COPY_AND_QA.md
```

Не содержит `package.json`, `root layout`, заглушек других модулей и не меняет `api/openapi.yaml`.

Для запуска отдельно используйте архив `ryadom-issue128-standalone.zip`. Для переноса в репозиторий, где уже есть frontend, используйте этот минимальный архив.

Полные инструкции содержатся в `docs/GITHUB_PR.md` автономного архива.
