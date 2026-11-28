import { PublicShell } from '@/modules/navigation/components/PublicShell';
import { notFound } from 'next/navigation';
import { PracticeView } from '@/modules/practices/components/PracticeView';
import { practices } from '@/modules/practices/mock/practices';
import { demoEnabled } from '@/modules/auth/server/demo-auth';
import { getPublishedPractice } from '@/modules/practices/server/demo-practices';
import type { Practice } from '@/modules/practices/model/types';
import '../practices.css';

export const dynamic = 'force-dynamic';

async function fetchPracticeFromApi(slug: string): Promise<Practice | null> {
  const base = process.env.PRACTICES_API_BASE_URL;
  if (!base || !/^https?:\/\//.test(base)) return null;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;

  try {
    const response = await fetch(
      `${base.replace(/\/$/, '')}/api/v1/practices/${encodeURIComponent(slug)}`,
      { cache: 'no-store', signal: AbortSignal.timeout(8000) },
    );
    if (!response.ok) return null;

    const raw = (await response.json()) as {
      slug: string;
      kind: Practice['kind'];
      title: string;
      summary: string;
      durationMinutes: number;
      tags?: string[];
      steps?: string[];
      boundaries?: string[];
    };

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
  } catch {
    return null;
  }
}

export default async function PracticePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const practice = (await fetchPracticeFromApi(slug)) ||
    practices.find(item => item.slug === slug) ||
    (demoEnabled() ? await getPublishedPractice(slug) : null);
  if (!practice) notFound();
  return <PublicShell activeHref="/practices" mainClassName="route-practices">
    <PracticeView practice={practice} />
  </PublicShell>;
}
