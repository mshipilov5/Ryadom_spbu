package education

import (
	"context"
	"sort"
	"time"

	"github.com/mshipilov5/Ryadom_spbu/backend/internal/core"
)

type memoryStore struct {
	articles []core.Article
}

func NewMemoryStore() core.EducationStore {
	return &memoryStore{articles: []core.Article{
		{
			Slug:            "exam-stress",
			Title:           "Как пережить экзаменационный стресс",
			Summary:         "Несколько безопасных способов снизить напряжение во время высокой учебной нагрузки.",
			Category:        core.Category{Slug: "study", Name: "Учёба"},
			Tags:            []core.Tag{{Slug: "stress", Name: "Стресс"}, {Slug: "exams", Name: "Экзамены"}},
			Type:            core.ContentTypeArticle,
			DurationMinutes: 5,
			Body:            "## Что можно сделать прямо сейчас\n\n- Сделайте короткий перерыв.\n- Выберите одну небольшую задачу.\n- Запланируйте отдых после неё.",
			Sources: []core.Source{{
				Title: "Всемирная организация здравоохранения — управление стрессом",
				URL:   "https://www.who.int/",
			}},
			Author:      "Редакция «Рядом»",
			Reviewer:    "Клинический рецензент СПбГУ",
			ReviewedAt:  time.Date(2026, time.October, 23, 0, 0, 0, 0, time.UTC),
			PublishedAt: pointerToTime(time.Date(2026, time.October, 23, 10, 0, 0, 0, time.UTC)),
			Published:   true,
		},
		{
			Slug:            "sleep-reset",
			Title:           "Если сбился сон: мягко возвращаем режим",
			Summary:         "Небольшие шаги, которые помогают постепенно восстановить более стабильный режим сна.",
			Category:        core.Category{Slug: "wellbeing", Name: "Самочувствие"},
			Tags:            []core.Tag{{Slug: "sleep", Name: "Сон"}, {Slug: "fatigue", Name: "Усталость"}},
			Type:            core.ContentTypeArticle,
			DurationMinutes: 5,
			Body:            "## Мягкий возврат к режиму\n\n1. Стабилизируйте время подъёма.\n2. Днём добавьте света и движения.\n3. За час до сна уменьшите количество сложных задач.",
			Sources:         []core.Source{},
			Author:          "Редакция «Рядом»",
			Reviewer:        "Клинический рецензент СПбГУ",
			ReviewedAt:      time.Date(2026, time.October, 21, 0, 0, 0, 0, time.UTC),
			PublishedAt:     pointerToTime(time.Date(2026, time.October, 21, 10, 0, 0, 0, time.UTC)),
			Published:       true,
		},
		{
			Slug:            "anxiety-grounding",
			Title:           "Когда тревога накрывает: возвращаем внимание в настоящее",
			Summary:         "Короткая текстовая практика, которая помогает переключить внимание с тревожных мыслей на происходящее вокруг.",
			ImageURL:        nil,
			Category:        core.Category{Slug: "emotional-state", Name: "Эмоциональное состояние"},
			Tags:            []core.Tag{{Slug: "anxiety", Name: "Тревога"}, {Slug: "self-help", Name: "Самопомощь"}},
			Type:            core.ContentTypeArticle,
			DurationMinutes: 4,
			ContentWarning:  pointerTo("Материал описывает сильную тревогу. Вы можете в любой момент перейти в раздел помощи."),
			Body:            "## Практика «5–4–3–2–1»\n\nОглянитесь и назовите:\n\n- 5 вещей, которые видите;\n- 4 телесных ощущения;\n- 3 звука;\n- 2 запаха;\n- 1 вкус или ощущение во рту.",
			Sources:         []core.Source{},
			Author:          "Редакция «Рядом»",
			Reviewer:        "Клинический рецензент СПбГУ",
			ReviewedAt:      time.Date(2026, time.October, 20, 0, 0, 0, 0, time.UTC),
			PublishedAt:     pointerToTime(time.Date(2026, time.October, 20, 10, 0, 0, 0, time.UTC)),
			Published:       true,
		},
		{
			Slug:            "editorial-draft",
			Title:           "Черновик для проверки",
			Summary:         "Эта запись никогда не должна попасть в публичный API.",
			Category:        core.Category{Slug: "study", Name: "Учёба"},
			Tags:            []core.Tag{{Slug: "stress", Name: "Стресс"}},
			Type:            core.ContentTypeArticle,
			DurationMinutes: 3,
			Body:            "Черновик",
			Sources:         []core.Source{},
			Author:          "Редакция «Рядом»",
			Reviewer:        "Клинический рецензент СПбГУ",
			ReviewedAt:      time.Date(2026, time.October, 24, 0, 0, 0, 0, time.UTC),
			Published:       false,
		},
	}}
}

func (s *memoryStore) ListPublished(_ context.Context) ([]core.Article, error) {
	articles := make([]core.Article, 0, len(s.articles))
	for _, article := range s.articles {
		if article.Published {
			articles = append(articles, article)
		}
	}

	sort.SliceStable(articles, func(i, j int) bool {
		return articles[i].PublishedAt.After(*articles[j].PublishedAt)
	})

	return articles, nil
}

func (s *memoryStore) GetPublishedBySlug(_ context.Context, slug string) (core.Article, error) {
	for _, article := range s.articles {
		if article.Slug == slug && article.Published {
			return article, nil
		}
	}

	return core.Article{}, core.ErrArticleNotFound
}

func pointerTo(value string) *string {
	return &value
}

func pointerToTime(value time.Time) *time.Time {
	return &value
}
