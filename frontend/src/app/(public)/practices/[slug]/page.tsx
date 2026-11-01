import { notFound } from 'next/navigation';
import { PracticeView } from '@/modules/practices/components/PracticeView';
import { PracticesSidebar } from '@/modules/practices/components/PracticesSidebar';
import { practices } from '@/modules/practices/mock/practices';
import '../practices.css';

export default async function PracticePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const practice = practices.find((item) => item.slug === slug);

  if (!practice) {
    notFound();
  }

  return (
    <div className="practicesShell">
      <PracticesSidebar />
      <main className="practicesMain practiceDetailMain">
        <header className="publicTopbar">
          <div>
            <span className="topbarSection">Практики</span>
            <span className="topbarHint">Текстовая практика самопомощи</span>
          </div>
          <div className="guestBadge" aria-label="Текущий режим: гость">
            <span className="guestAvatar" aria-hidden="true">Г</span>
            <span>Гость</span>
          </div>
        </header>
        <PracticeView practice={practice} />
      </main>
    </div>
  );
}
