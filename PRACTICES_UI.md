# Каталог практик — отдельная frontend-ветка

Ветка: `feature/practices-catalog-ui`

Эта реализация создана от `main` и не зависит от `psychoeducation` или `crisis`.
В `main` исходного репозитория frontend отсутствовал, поэтому ветка содержит минимальный автономный Next.js-каркас.

## Стек

- TypeScript
- React
- Next.js App Router
- CSS

Без сторонних UI-библиотек.

## Что реализовано

- `/practices` — каталог практик;
- поиск по названию, описанию и тегам;
- фильтр по пяти типам: дыхание, заземление, стресс, осознанность, чек-листы;
- 10 моковых практик;
- отдельные страницы `/practices/[slug]`;
- у каждой практики есть длительность, шаги и ограничения;
- явно указано, что практику можно остановить в любой момент;
- нет обещаний лечения и диагностики;
- loading / empty / error / many QA-состояния;
- адаптивность от 360 px;
- keyboard focus и reduced motion.

## QA URL

- `/practices`
- `/practices?state=loading`
- `/practices?state=empty`
- `/practices?state=error`
- `/practices?state=many`
- `/practices/long-exhale`
- `/practices/five-four-three-two-one`
- `/practices/exam-checklist`

## Запуск

```bash
cd frontend
npm install
npm run dev
```

Проверка production-сборки:

```bash
npm run build
```

## Перенос в общий проект после слияния других веток

Когда в `main` уже будет общий frontend-каркас, из этой ветки нужны только:

```text
frontend/src/app/(public)/practices/
frontend/src/modules/practices/
```

`package.json`, `tsconfig.json`, `layout.tsx`, `globals.css` и `next.config.ts` в этом случае заменять не нужно.

Сайдбар практик содержит обычные `href` на будущие/другие разделы, но не импортирует их код. Поэтому модуль practices компилируется независимо.
