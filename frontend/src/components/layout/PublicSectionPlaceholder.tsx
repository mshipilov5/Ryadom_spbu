import Link from 'next/link';
import { PsychoeducationSidebar } from '@/modules/education/components/PsychoeducationSidebar';

type Props = {
  title: string;
  description: string;
  activeHref: string;
};

export function PublicSectionPlaceholder({ title, description, activeHref }: Props) {
  return (
    <div className="psychoShell">
      <PsychoeducationSidebar activeHref={activeHref} />
      <main className="psychoMain placeholderPage">
        <section className="placeholderCard">
          <p className="eyebrow">Демо-сборка</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>Этот раздел не входит в текущую задачу по верстке «Психопросвета».</p>
          <Link className="primaryButton" href="/psychoeducation">Перейти в психопросвет</Link>
        </section>
      </main>
    </div>
  );
}
