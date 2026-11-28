/**
 * Демо-практики для локальной проверки интерфейса. Не используются в production.
 * Активируются только в development при PRACTICES_API_MODE=demo.
 *
 * Серверный слой (API-роут и страница детали) читает флаг через PRACTICES_API_MODE.
 * Клиентские компоненты этот модуль не импортируют: они работают только с API.
 */
import type { Practice } from '../model/types';
import { practices } from './practices';

export const isPracticesDemoEnabled = (): boolean =>
  process.env.NODE_ENV === 'development' && process.env.PRACTICES_API_MODE === 'demo';

export function getDemoPractice(slug: string): Practice | null {
  return practices.find((practice) => practice.slug === slug) ?? null;
}

/** Каталог в том же виде, что и ответ Go-API: { items, total }. */
export function getDemoPracticeList(params: URLSearchParams) {
  const query = (params.get('q') ?? '').trim().toLocaleLowerCase('ru');
  const kind = params.get('kind');
  const filtered = practices.filter(
    (practice) =>
      (!kind || practice.kind === kind) &&
      (!query || `${practice.title} ${practice.summary}`.toLocaleLowerCase('ru').includes(query)),
  );
  return { items: filtered, total: filtered.length };
}