import { notFound } from 'next/navigation';
import { ArticleView } from '@/modules/education/components/ArticleView';
import { PsychoeducationSidebar } from '@/modules/education/components/PsychoeducationSidebar';
import { psychoeducationMaterials } from '@/modules/education/mock/materials';
import '../psychoeducation.css';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const material = psychoeducationMaterials.find((item) => item.slug === slug);

  if (!material) {
    notFound();
  }

  return (
    <div className="psychoShell">
      <PsychoeducationSidebar />
      <main className="psychoMain articleMain">
        <header className="publicTopbar">
          <div>
            <span className="topbarSection">Психопросвет</span>
            <span className="topbarHint">Проверенный открытый материал</span>
          </div>
          <div className="guestBadge" aria-label="Текущий режим: гость">
            <span className="guestAvatar" aria-hidden="true">Г</span>
            <span>Гость</span>
          </div>
        </header>
        <ArticleView material={material} />
      </main>
    </div>
  );
}
