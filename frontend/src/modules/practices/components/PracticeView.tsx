import Link from 'next/link';
import { practiceKindDescriptions, practiceKindLabels } from '@/modules/practices/lib/kinds';
import type { Practice } from '@/modules/practices/model/types';

export function PracticeView({ practice }: { practice: Practice }) {
  return (
    <article className="practiceDetail">
      <Link className="backLink" href="/practices">← Все практики</Link>

      <header className="practiceDetailHeader">
        <p className="eyebrow">{practiceKindLabels[practice.kind]}</p>
        <h1>{practice.title}</h1>
        <p className="practiceLead">{practice.summary}</p>
        <div className="practiceDetailMeta">
          <span>{practice.durationMinutes} мин</span>
          <span aria-hidden="true">·</span>
          <span>Можно остановиться в любой момент</span>
        </div>
      </header>

      <section className="practiceBoundaryNote" aria-labelledby="practice-boundaries">
        <h2 id="practice-boundaries">Перед началом</h2>
        <p>{practiceKindDescriptions[practice.kind]}</p>
        <ul>
          {practice.boundaries.map((boundary) => <li key={boundary}>{boundary}</li>)}
        </ul>
      </section>

      <section className="practiceSteps" aria-labelledby="practice-steps">
        <h2 id="practice-steps">Как выполнить</h2>
        <ol>
          {practice.steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>

      <div className="practiceClosingNote">
        <strong>Важно</strong>
        <p>
          Эта практика относится к самопомощи и не является диагностикой или лечением.
          Если упражнение не подходит вам сейчас, его можно просто прекратить.
        </p>
      </div>
    </article>
  );
}
