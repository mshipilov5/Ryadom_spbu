# Как передать issue #128 через отдельную ветку и PR

Поскольку в `main` на 2026-11-23 нет `frontend`, автономный архив содержит каркас Next.js. Когда общий frontend появится в `main`, не переписывайте его конфиги из данного архива; переносите только `ui-states`.

```bash
git switch main
git pull --ff-only origin main
git switch -c feature/ui-states-128
```

Если в `main` уже есть Next frontend, копируйте из **PR-only** архива только:

```text
frontend/src/app/(public)/ui-states/
frontend/src/modules/ui-states/
docs/UX_COPY_AND_QA.md
```

Если `main` пока без `frontend`, возьмите **standalone** архив целиком, включая пакет/корневой layout, исключив демо-ссылки при будущей интеграции.

```bash
cd frontend
npm install
npm run typecheck
npm run build
npm run dev
cd ..
git status
git add frontend docs/UX_COPY_AND_QA.md
git commit -m "Design UX edge states for issue 128"
git push -u origin feature/ui-states-128
```

Создайте PR: `base: main`, `compare: feature/ui-states-128`.

**Заголовок:** `Design consent, error, empty, outage and logout states`

**Текст PR:**

```md
Closes #128

## Сделано
- 12 UI-сценариев: согласия, ошибки, пустые списки, SSO, запись, скрытый контакт, выход
- Интерактивные макеты на моках и согласованные текстовые формулировки
- Адаптивная навигация и keyboard/focus
- Отдельный модуль без зависимостей от других разделов

## Проверка
- `npm run typecheck`
- `npm run build`
- URL и действия из `docs/UX_COPY_AND_QA.md`

## Ограничения
- API не подключён, согласия/сессии не сохраняются
- Режим администратора — только дизайн-превью
```

Важно: в GitHub-аккаунте, подключённом к этой сессии, обнаружен доступ `pull: true`, `push: false`, поэтому ветка и PR **не создавались автоматически**.
