CREATE TABLE material_categories (
    id BIGSERIAL PRIMARY KEY,
    slug VARCHAR(64) NOT NULL UNIQUE,
    name VARCHAR(120) NOT NULL
);

CREATE TABLE material_tags (
    id BIGSERIAL PRIMARY KEY,
    slug VARCHAR(64) NOT NULL UNIQUE,
    name VARCHAR(120) NOT NULL
);

CREATE TABLE materials (
    id BIGSERIAL PRIMARY KEY,
    slug VARCHAR(64) NOT NULL UNIQUE,
    type VARCHAR(32) NOT NULL CHECK (type = 'article'),
    title VARCHAR(180) NOT NULL,
    summary VARCHAR(500) NOT NULL,
    image_url TEXT,
    category_id BIGINT NOT NULL REFERENCES material_categories(id),
    duration_minutes INTEGER NOT NULL CHECK (duration_minutes BETWEEN 1 AND 120),
    content_warning VARCHAR(500),
    body TEXT NOT NULL,
    author VARCHAR(180) NOT NULL,
    reviewer VARCHAR(180) NOT NULL,
    reviewed_at TIMESTAMPTZ NOT NULL,
    status VARCHAR(32) NOT NULL CHECK (status IN ('draft', 'published')),
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CHECK ((status = 'published' AND published_at IS NOT NULL) OR status = 'draft')
);

CREATE TABLE material_tag_links (
    material_id BIGINT NOT NULL REFERENCES materials(id) ON DELETE CASCADE,
    tag_id BIGINT NOT NULL REFERENCES material_tags(id) ON DELETE CASCADE,
    PRIMARY KEY (material_id, tag_id)
);

CREATE TABLE material_sources (
    id BIGSERIAL PRIMARY KEY,
    material_id BIGINT NOT NULL REFERENCES materials(id) ON DELETE CASCADE,
    title VARCHAR(500) NOT NULL,
    url TEXT NOT NULL,
    position INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX materials_public_catalog_idx
    ON materials (published_at DESC)
    WHERE status = 'published';

-- Начальные данные нужны для локальной разработки и приёмки публичного API.
-- Материал editorial-draft проверяет, что публичный API не раскрывает черновики.
INSERT INTO material_categories (slug, name) VALUES
    ('study', 'Учёба'),
    ('wellbeing', 'Самочувствие'),
    ('emotional-state', 'Эмоциональное состояние');

INSERT INTO material_tags (slug, name) VALUES
    ('anxiety', 'Тревога'),
    ('exams', 'Экзамены'),
    ('fatigue', 'Усталость'),
    ('self-help', 'Самопомощь'),
    ('sleep', 'Сон'),
    ('stress', 'Стресс');

INSERT INTO materials (
    slug, type, title, summary, image_url, category_id, duration_minutes,
    content_warning, body, author, reviewer, reviewed_at, status, published_at
) VALUES
    (
        'exam-stress',
        'article',
        'Как пережить экзаменационный стресс',
        'Несколько безопасных способов снизить напряжение во время высокой учебной нагрузки.',
        NULL,
        (SELECT id FROM material_categories WHERE slug = 'study'),
        5,
        NULL,
        E'## Что можно сделать прямо сейчас\n\n- Сделайте короткий перерыв.\n- Выберите одну небольшую задачу.\n- Запланируйте отдых после неё.',
        'Редакция «Рядом»',
        'Клинический рецензент СПбГУ',
        '2026-10-23T00:00:00Z',
        'published',
        '2026-10-23T10:00:00Z'
    ),
    (
        'sleep-reset',
        'article',
        'Если сбился сон: мягко возвращаем режим',
        'Небольшие шаги, которые помогают постепенно восстановить более стабильный режим сна.',
        NULL,
        (SELECT id FROM material_categories WHERE slug = 'wellbeing'),
        5,
        NULL,
        E'## Мягкий возврат к режиму\n\n1. Стабилизируйте время подъёма.\n2. Днём добавьте света и движения.\n3. За час до сна уменьшите количество сложных задач.',
        'Редакция «Рядом»',
        'Клинический рецензент СПбГУ',
        '2026-10-21T00:00:00Z',
        'published',
        '2026-10-21T10:00:00Z'
    ),
    (
        'anxiety-grounding',
        'article',
        'Когда тревога накрывает: возвращаем внимание в настоящее',
        'Короткая текстовая практика, которая помогает переключить внимание с тревожных мыслей на происходящее вокруг.',
        NULL,
        (SELECT id FROM material_categories WHERE slug = 'emotional-state'),
        4,
        'Материал описывает сильную тревогу. Вы можете в любой момент перейти в раздел помощи.',
        E'## Практика «5–4–3–2–1»\n\nОглянитесь и назовите:\n\n- 5 вещей, которые видите;\n- 4 телесных ощущения;\n- 3 звука;\n- 2 запаха;\n- 1 вкус или ощущение во рту.',
        'Редакция «Рядом»',
        'Клинический рецензент СПбГУ',
        '2026-10-20T00:00:00Z',
        'published',
        '2026-10-20T10:00:00Z'
    ),
    (
        'editorial-draft',
        'article',
        'Черновик для проверки',
        'Эта запись никогда не должна попасть в публичный API.',
        NULL,
        (SELECT id FROM material_categories WHERE slug = 'study'),
        3,
        NULL,
        'Черновик',
        'Редакция «Рядом»',
        'Клинический рецензент СПбГУ',
        '2026-10-24T00:00:00Z',
        'draft',
        NULL
    );

INSERT INTO material_tag_links (material_id, tag_id)
SELECT material.id, tag.id
FROM materials material
JOIN material_tags tag ON tag.slug IN ('stress', 'exams')
WHERE material.slug = 'exam-stress';

INSERT INTO material_tag_links (material_id, tag_id)
SELECT material.id, tag.id
FROM materials material
JOIN material_tags tag ON tag.slug IN ('sleep', 'fatigue')
WHERE material.slug = 'sleep-reset';

INSERT INTO material_tag_links (material_id, tag_id)
SELECT material.id, tag.id
FROM materials material
JOIN material_tags tag ON tag.slug IN ('anxiety', 'self-help')
WHERE material.slug = 'anxiety-grounding';

INSERT INTO material_tag_links (material_id, tag_id)
SELECT material.id, tag.id
FROM materials material
JOIN material_tags tag ON tag.slug = 'stress'
WHERE material.slug = 'editorial-draft';

INSERT INTO material_sources (material_id, title, url, position)
SELECT id, 'Всемирная организация здравоохранения — управление стрессом', 'https://www.who.int/', 1
FROM materials
WHERE slug = 'exam-stress';
