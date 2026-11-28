import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const headers = { 'Cache-Control': 'no-store' };

function upstreamBase(): string {
  const base = process.env.PRACTICES_API_BASE_URL;
  if (!base || !/^https?:\/\//.test(base)) return '';
  return base.replace(/\/$/, '');
}

type ApiPractice = {
  slug: string;
  kind: string;
  title: string;
  summary: string;
  durationMinutes: number;
  tags: string[];
  steps?: string[];
  boundaries?: string[];
};

// Приводим ответ Go-API к форме Practice, ожидаемой фронтендом.
function toPractice(p: ApiPractice) {
  return {
    slug: p.slug,
    kind: p.kind,
    title: p.title,
    summary: p.summary,
    durationMinutes: p.durationMinutes,
    tags: p.tags ?? [],
    steps: p.steps ?? [],
    boundaries: p.boundaries ?? [],
  };
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ parts: string[] }> }) {
  const { parts } = await params;
  const base = upstreamBase();
  if (!base) {
    return NextResponse.json({ message: 'Сервис практик не настроен' }, { status: 503, headers });
  }

  // Разрешены только list (/practices) и detail (/practices/{slug}).
  const allowed =
    (parts.length === 1 && parts[0] === 'practices') ||
    (parts.length === 2 && parts[0] === 'practices' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(parts[1]));
  if (!allowed) {
    return NextResponse.json({ message: 'Не найдено' }, { status: 404, headers });
  }

  const query = new URLSearchParams();
  for (const [k, v] of req.nextUrl.searchParams) {
    if (k === 'q' || k === 'kind') query.append(k, v);
  }

  const url = `${base}/api/v1/${parts.map(encodeURIComponent).join('/')}${query.size ? `?${query.toString()}` : ''}`;

  try {
    const response = await fetch(url, { cache: 'no-store', signal: AbortSignal.timeout(8000) });
    if (response.status === 404) {
      return NextResponse.json({ message: 'Не найдено' }, { status: 404, headers });
    }
    if (!response.ok) {
      return NextResponse.json({ message: 'Сервис временно недоступен' }, { status: 503, headers });
    }

    const raw: unknown = await response.json();

    if (parts.length === 2) {
      return NextResponse.json(toPractice(raw as ApiPractice), { headers });
    }

    const list = raw as { items?: ApiPractice[]; total?: number };
    const items = (list.items ?? []).map(toPractice);
    return NextResponse.json({ items, total: list.total ?? items.length }, { headers });
  } catch {
    return NextResponse.json({ message: 'Сервис временно недоступен' }, { status: 503, headers });
  }
}
