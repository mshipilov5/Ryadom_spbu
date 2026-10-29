import { Suspense } from 'react';
import { CatalogClient } from '@/modules/education/components/CatalogClient';
import { CatalogLoading } from '@/modules/education/components/CatalogStates';
import { PsychoeducationSidebar } from '@/modules/education/components/PsychoeducationSidebar';
import './psychoeducation.css';

export default function Page() {
  return (
    <div className="psychoShell">
      <PsychoeducationSidebar />
      <main className="psychoMain">
        <header className="publicTopbar isCompact">
          <div className="guestBadge" aria-label="Текущий режим: гость">
            <span className="guestAvatar" aria-hidden="true">Г</span>
            <span>Гость</span>
          </div>
        </header>

        <section className="catalogHero">
          <p className="eyebrow">Психопросвет</p>
          <h1>Материалы, которые помогают разобраться</h1>
          <p>
            Проверенные статьи о тревоге, стрессе, учёбе, отношениях и самопомощи.
          </p>
        </section>

        <Suspense fallback={<CatalogLoading />}>
          <CatalogClient />
        </Suspense>
      </main>
    </div>
  );
}
