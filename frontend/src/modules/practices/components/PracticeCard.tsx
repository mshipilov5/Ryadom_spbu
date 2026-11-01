import Link from 'next/link';
import { practiceKindLabels } from '@/modules/practices/lib/kinds';
import type { Practice } from '@/modules/practices/model/types';

export function PracticeCard({ practice }: { practice: Practice }) {
  return (
    <article className={`practiceCard practiceKind-${practice.kind}`}>
      <div className="practiceCardAccent" aria-hidden="true" />
      <div className="practiceCardBody">
        <div className="practiceMeta">
          <span>{practiceKindLabels[practice.kind]}</span>
          <span aria-hidden="true">·</span>
          <span>{practice.durationMinutes} мин</span>
        </div>
        <h2>{practice.title}</h2>
        <p className="practiceSummary">{practice.summary}</p>
        <div className="practiceTags" aria-label="Темы практики">
          {practice.tags.map((tag) => <span className="practiceTag" key={tag}>{tag}</span>)}
        </div>
        <Link className="practiceOpenLink" href={`/practices/${practice.slug}`}>
          Открыть практику
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
