'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PracticeCard } from './PracticeCard';
import { PracticeCatalogEmpty, PracticeCatalogError, PracticeCatalogLoading } from './PracticeCatalogStates';
import { PracticeFilters } from './PracticeFilters';
import { filterPractices } from '../lib/filterPractices';
import { practices as builtInPractices } from '../mock/practices';
import type { Practice, PracticeKind } from '../model/types';
import { Pagination, PAGE_SIZES, usePaginatedItems } from '@/modules/ui/pagination/Pagination';

export function PracticeCatalogClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const forcedState = searchParams.get('state');
  const [query, setQuery] = useState('');
  const [selectedKind, setSelectedKind] = useState<PracticeKind | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [published, setPublished] = useState<Practice[]>([]);
  const [loading, setLoading] = useState(true);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    if (forcedState === 'loading') { setLoading(true); return; }
    const controller = new AbortController();
    setLoading(true);
    const timer = window.setTimeout(async () => {
      try {
        const response = await fetch('/api/public-practices/practices', { cache: 'no-store', signal: controller.signal });
        if (response.ok) {
          const result: { items?: Practice[] } = await response.json();
          if (!controller.signal.aborted && Array.isArray(result.items)) setPublished(result.items);
        }
      } catch { /* static catalog remains available without demo API */ }
      finally { if (!controller.signal.aborted) setLoading(false); }
    }, 200);
    return () => { window.clearTimeout(timer); controller.abort(); };
  }, [forcedState, retry]);

  // Данные из API заменяют встроенный мок; при недоступности API остаётся мок (фолбэк для демо).
  const all = useMemo(() => (published.length ? published : builtInPractices), [published]);
  const tags = useMemo(() => Array.from(new Set(all.flatMap(p => p.tags))).sort((a, b) => a.localeCompare(b, 'ru')), [all]);
  const filtered = useMemo(() => filterPractices(all, query, selectedKind, selectedTags), [all, query, selectedKind, selectedTags]);
  const visible = useMemo(() => {
    if (forcedState === 'empty') return [];
    if (forcedState === 'many') return Array.from({ length: 30 }, (_, i) => all[i % all.length]);
    return filtered;
  }, [all, filtered, forcedState]);

  const paged = usePaginatedItems(visible, PAGE_SIZES.catalog, JSON.stringify([query, selectedKind, selectedTags, forcedState]));

  const reset = () => {
    setQuery(''); setSelectedKind(null); setSelectedTags([]);
    if (forcedState) router.replace('/practices');
  };
  return <>
    <PracticeFilters query={query} selectedKind={selectedKind} selectedTags={selectedTags}
      availableTags={tags} onQueryChange={setQuery} onKindChange={setSelectedKind}
      onTagsChange={setSelectedTags} onReset={reset} />
    <div className="catalogResultMeta" aria-live="polite">{loading ? 'Загружаем практики…' : `Найдено практик: ${visible.length}`}</div>
    {loading ? <PracticeCatalogLoading/> : forcedState === 'error' ?
      <PracticeCatalogError onRetry={() => { router.replace('/practices'); setRetry(x => x + 1); }}/> :
      visible.length === 0 ? <PracticeCatalogEmpty onReset={reset}/> :
      <div className="practiceGrid">{paged.pageItems.map((practice, index) => <PracticeCard practice={practice} key={`${practice.slug}-${(paged.page-1)*PAGE_SIZES.catalog+index}`}/>)}</div>}
    {!loading && forcedState !== 'error' && <Pagination {...paged} label="каталог практик" onPageChange={paged.setPage} />}
  </>;
}
