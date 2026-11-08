import Link from 'next/link';
import { contentTypeLabels } from '../lib/contentType';
import type { MaterialDetail } from '../model/types';
import { ArticleContent } from './ArticleContent';

function formatReviewedAt(value: string) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(value));
}

export function ArticleView({ material }: { material: MaterialDetail }) {
  return (
    <article className="article">
      <Link className="backLink" href="/psychoeducation">← Назад в психопросвет</Link>

      <header className="articleHeader">
        <div className="materialMeta">
          <span>{contentTypeLabels[material.type]}</span>
          <span aria-hidden="true">•</span>
          <span>{material.durationMinutes} мин чтения</span>
        </div>
        <h1>{material.title}</h1>
        <p className="articleLead">{material.summary}</p>
        <div className="tagList" aria-label="Теги материала">
          {material.tags.map((tag) => (
            <span className="tag" key={tag.slug}>{tag.name}</span>
          ))}
        </div>
      </header>

      <dl className="articleReviewMeta" aria-label="Редакционная информация">
        <div>
          <dt>Автор</dt>
          <dd>{material.author}</dd>
        </div>
        <div>
          <dt>Рецензент</dt>
          <dd>{material.reviewer}</dd>
        </div>
        <div>
          <dt>Дата пересмотра</dt>
          <dd>{formatReviewedAt(material.reviewedAt)}</dd>
        </div>
      </dl>

      <div className={`articleCover ${material.imageUrl ? '' : 'isPlaceholder'}`}>
        {material.imageUrl ? (
          <img src={material.imageUrl} alt={`Обложка материала «${material.title}»`} />
        ) : (
          <div className="coverPlaceholder" role="img" aria-label="У материала нет обложки">Психопросвет</div>
        )}
      </div>

      {material.contentWarning && (
        <aside className="contentWarning">
          <strong>Обратите внимание</strong>
          <p>{material.contentWarning}</p>
        </aside>
      )}

      <ArticleContent body={material.body} />

      {material.sources.length > 0 && (
        <section className="sources">
          <h2>Источники</h2>
          <ul>
            {material.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noreferrer">
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

    </article>
  );
}
