import { NextResponse } from 'next/server';
import { isHomeFeed } from '@/modules/home/types';
export const dynamic = 'force-dynamic';
export async function GET() {
  // DEMO is opt-in; no demo data used in real/test builds.
  if (process.env.NODE_ENV === 'development' && process.env.HOME_API_MODE === 'demo') {
    return NextResponse.json({message:'Начните с небольшого шага',event:{title:'Встречи и события',description:'Изучите календарь',href:'/events'},practice:{title:'Пауза на 2 минуты',description:'Короткое упражнение',href:'/practices'}}, {headers:{'Cache-Control':'no-store'}});
  }
  const base = process.env.HOME_API_URL;
  const path = process.env.HOME_API_PATH;
  if (!base || !path || !base.startsWith('http')) {
    return NextResponse.json({code:'unconfigured'}, {status:503,headers:{'Cache-Control':'no-store'}});
  }
  try {
    const target = new URL(path, base.endsWith('/') ? base : `${base}/`);
    if (!['http:','https:'].includes(target.protocol)) throw Error('bad URL');
    const response = await fetch(target, {cache:'no-store',signal:AbortSignal.timeout(6500)});
    if (!response.ok) return NextResponse.json({code:'upstream_unavailable'}, {status:response.status === 404 ? 404 : 503});
    const data: unknown = await response.json();
    if (!isHomeFeed(data)) return NextResponse.json({code:'unexpected_response'}, {status:502});
    return NextResponse.json(data, {headers:{'Cache-Control':'no-store'}});
  } catch {
    return NextResponse.json({code:'network_unavailable'}, {status:503});
  }
}
