import { Suspense } from 'react';
import { PracticeCatalogClient } from '@/modules/practices/components/PracticeCatalogClient';
import { PracticeCatalogLoading } from '@/modules/practices/components/PracticeCatalogStates';
import { PracticesSidebar } from '@/modules/practices/components/PracticesSidebar';
import './practices.css';

export default function PracticesPage() {
  return (
    <div className="practicesShell">
      <PracticesSidebar />
      <main className="practicesMain">
        <header className="publicTopbar">
          <div>
            <span className="topbarSection">Практики</span>
            <span className="topbarHint">Короткие упражнения и чек-листы</span>
          </div>
          <div className="guestBadge" aria-label="Текущий режим: гость">
            <span className="guestAvatar" aria-hidden="true">Г</span>
            <span>Гость</span>
          </div>
        </header>

        <section className="catalogHero">
          <p className="eyebrow">Практики</p>
          <h1>Небольшие действия, которые можно попробовать сейчас</h1>
          <p>
            Дыхание, заземление, работа со стрессом, осознанность и короткие чек-листы.
            Практику можно остановить в любой момент.
          </p>
        </section>

        <Suspense fallback={<PracticeCatalogLoading />}>
          <PracticeCatalogClient />
        </Suspense>
      </main>
    </div>
  );
}
