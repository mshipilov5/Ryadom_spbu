import { PublicShell } from '@/modules/navigation/components/PublicShell';
import { notFound } from 'next/navigation';
import { PracticeView } from '@/modules/practices/components/PracticeView';
import { getDemoPractice, isPracticesDemoEnabled } from '@/modules/practices/mock/demo';
import { demoEnabled } from '@/modules/auth/server/demo-auth';
import { getPublishedPractice } from '@/modules/practices/server/demo-practices';
import type { Practice } from '@/modules/practices/model/types';
import '../practices.css';

export const dynamic = 'force-dynamic';

type ApiPractice = {
  slug: string;
  kind: Practice['kind'];
  title: string;
  summary: string;
  durationMinutes: number;
  tags?: string[];
  steps?: string[];
  boundaries?: string[];
};

class PracticeUnavailableError extends Error {}

async function fetchPracticeFromApi(slug: string): Promise<Practice | null> {
  const base = process.env.PRACTICES_API_BASE_URL;
  if (!base || !/^https?:\/\//.test(base)) throw new PracticeUnavailableError();
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;

  let response: Response;
  try {
    response = await fetch(
      `${base.replace(/\/$/, '')}/api/v1/practices/${encodeURIComponent(slug)}`,
      { cache: 'no-store', signal: AbortSignal.timeout(8000) },
    );
  } catch {
    throw new PracticeUnavailableError();
  }
  if (response.status === 404) return null;
  if (!response.ok) throw new PracticeUnavailableError();

  let raw: ApiPractice;
  try {
    raw = (await response.json()) as ApiPractice;
  } catch {
    throw new PracticeUnavailableError();
  }

  return {
    slug: raw.slug,
    kind: raw.kind,
    title: raw.title,
    summary: raw.summary,
    durationMinutes: raw.durationMinutes,
    tags: raw.tags ?? [],
    steps: raw.steps ?? [],
    boundaries: raw.boundaries ?? [],
  };
}

export default async function PracticePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Явный локальный demo — в production ветка никогда не активируется.
  if (isPracticesDemoEnabled()) {
    const demoPractice = getDemoPractice(slug);
    if (!demoPractice) notFound();
    return (
      <PublicShell activeHref="/practices" mainClassName="route-practices">
        <PracticeView practice={demoPractice} />
      </PublicShell>
    );
  }

  let practice: Practice | null;
  try {
    practice = await fetchPracticeFromApi(slug);
  } catch {
    return (
      <PublicShell activeHref="/practices" mainClassName="route-practices">
        <div className="catalogState catalogStateError" role="alert">
          <span className="catalogStateIcon" aria-hidden="true">!</span>
          <h2>Практика временно недоступна</h2>
          <p>Сервис практик не отвечает. Попробуйте открыть страницу позже.</p>
        </div>
      </PublicShell>
    );
  }

  if (!practice && demoEnabled()) practice = await getPublishedPractice(slug);
  if (!practice) notFound();

  return (
    <PublicShell activeHref="/practices" mainClassName="route-practices">
      <PracticeView practice={practice} />
    </PublicShell>
  );
}
