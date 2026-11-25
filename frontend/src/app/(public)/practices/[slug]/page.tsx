import { notFound } from 'next/navigation';
import { PracticeView } from '@/modules/practices/components/PracticeView';
import { SiteHeader } from '@/modules/navigation/components/SiteHeader';
import { practices } from '@/modules/practices/mock/practices';
import '../practices.css';

export default async function PracticePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const practice = practices.find((item) => item.slug === slug);

  if (!practice) {
    notFound();
  }

  return (
    <div className="publicShell">
      <SiteHeader activeHref="/practices" />
      <main className="publicMain practiceDetailMain">
        <nav className="publicBreadcrumbs" aria-label="Навигационная цепочка">
          <a href="/">Главная</a>
          <span aria-hidden="true">/</span>
          <a href="/practices">Практики</a>
          <span aria-hidden="true">/</span>
          <span>{practice.title}</span>
        </nav>
        <PracticeView practice={practice} />
      </main>
    </div>
  );
}
