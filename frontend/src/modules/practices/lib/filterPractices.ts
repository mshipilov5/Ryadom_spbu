import type { Practice, PracticeKind } from '@/modules/practices/model/types';

export function filterPractices(
  items: Practice[],
  query: string,
  selectedKind: PracticeKind | null,
): Practice[] {
  const normalizedQuery = query.trim().toLocaleLowerCase('ru');

  return items.filter((practice) => {
    if (selectedKind && practice.kind !== selectedKind) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const searchable = [practice.title, practice.summary, ...practice.tags]
      .join(' ')
      .toLocaleLowerCase('ru');

    return searchable.includes(normalizedQuery);
  });
}
