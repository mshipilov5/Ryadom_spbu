import Link from 'next/link';
import { contentTypeLabels } from '../lib/contentType';
import type { MaterialPreview } from '../model/types';

function formatReviewedAt(value: string) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(value));
}

export function MaterialCard({ material }: { material: MaterialPreview }) {
  return (
    <Link className="materialCard" href={`/psychoeducation/${material.slug}`}>
      <div className={`materialCover ${material.imageUrl ? '' : 'isPlaceholder'}`}>
        {material.imageUrl ? (
          <img src={material.imageUrl} alt={`Обложка материала «${material.title}»`} />
        ) : (
          <div className="coverPlaceholder" role="img" aria-label="У материала нет обложки">Психопросвет</div>
        )}
      </div>

      <div className="materialCardBody">
        <div className="materialMeta">
          <span>{contentTypeLabels[material.type]}</span>
          <span aria-hidden="true">•</span>
          <span>{material.durationMinutes} мин</span>
        </div>

        <h2>{material.title}</h2>
        <p className="materialSummary">{material.summary}</p>

        <div className="tagList" aria-label="Теги материала">
          {material.tags.map((tag) => (
            <span className="tag" key={tag.slug} title={tag.name}>{tag.name}</span>
          ))}
        </div>

        <div className="cardReviewMeta">
          <span>Автор: {material.author}</span>
          <span>Рецензент: {material.reviewer}</span>
          <span>Пересмотрено: {formatReviewedAt(material.reviewedAt)}</span>
        </div>

      </div>
    </Link>
  );
}
