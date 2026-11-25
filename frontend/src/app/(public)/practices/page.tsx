import { Suspense } from 'react';
import { PracticeCatalogClient } from '@/modules/practices/components/PracticeCatalogClient';
import { PracticeCatalogLoading } from '@/modules/practices/components/PracticeCatalogStates';
import { SiteHeader } from '@/modules/navigation/components/SiteHeader';
import './practices.css';

export default function PracticesPage() {
  return (
    <div className="publicShell">
      <SiteHeader activeHref="/practices" />
      <main className="publicMain">
        <nav className="publicBreadcrumbs" aria-label="Навигационная цепочка">
          <a href="/">Главная</a>
          <span aria-hidden="true">/</span>
          <span>Практики</span>
        </nav>

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
