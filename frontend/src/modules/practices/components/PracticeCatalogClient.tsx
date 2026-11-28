'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PracticeCard } from './PracticeCard';
import { PracticeCatalogEmpty, PracticeCatalogError, PracticeCatalogLoading } from './PracticeCatalogStates';
import { PracticeFilters } from './PracticeFilters';
import { filterPractices } from '../lib/filterPractices';
import type { Practice, PracticeKind } from '../model/types';
import { Pagination, PAGE_SIZES, usePaginatedItems } from '@/modules/ui/pagination/Pagination';

export function PracticeCatalogClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const forcedState = searchParams.get('state');
  const [query, setQuery] = useState('');
  const [selectedKind, setSelectedKind] = useState<PracticeKind | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [items, setItems] = useState<Practice[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    if (forcedState === 'loading') { setStatus('loading'); return; }
    const controller = new AbortController();
    setStatus('loading');
    const timer = window.setTimeout(async () => {
      try {
        const response = await fetch('/api/public-practices/practices', { cache: 'no-store', signal: controller.signal });
        if (!response.ok) throw new Error(`Practice catalog request failed: ${response.status}`);
        const result: { items?: Practice[] } = await response.json();
        if (controller.signal.aborted) return;
        setItems(Array.isArray(result.items) ? result.items : []);
        setStatus('ready');
      } catch {
        if (!controller.signal.aborted) setStatus('error');
      }
    }, 200);
    return () => { window.clearTimeout(timer); controller.abort(); };
  }, [forcedState, retry]);

  const tags = useMemo(() => Array.from(new Set(items.flatMap(p => p.tags))).sort((a, b) => a.localeCompare(b, 'ru')), [items]);
  const filtered = useMemo(() => filterPractices(items, query, selectedKind, selectedTags), [items, query, selectedKind, selectedTags]);
  const visible = useMemo(() => {
    if (forcedState === 'empty') return [];
    if (forcedState === 'many' && items.length > 0) return Array.from({ length: 30 }, (_, i) => items[i % items.length]);
    return filtered;
  }, [items, filtered, forcedState]);

  const paged = usePaginatedItems(visible, PAGE_SIZES.catalog, JSON.stringify([query, selectedKind, selectedTags, forcedState]));

  const reset = () => {
    setQuery(''); setSelectedKind(null); setSelectedTags([]);
    if (forcedState && forcedState !== 'loading') router.replace('/practices');
  };
  const showError = forcedState === 'error' || (status === 'error' && !forcedState);
  const showLoading = forcedState === 'loading' || (status === 'loading' && !forcedState);
  return <>
    <PracticeFilters query={query} selectedKind={selectedKind} selectedTags={selectedTags}
      availableTags={tags} onQueryChange={setQuery} onKindChange={setSelectedKind}
      onTagsChange={setSelectedTags} onReset={reset} />
    <div className="catalogResultMeta" aria-live="polite">{showLoading ? 'Загружаем практики…' : showError ? null : `Найдено практик: ${visible.length}`}</div>
    {showLoading ? <PracticeCatalogLoading/> : showError ?
      <PracticeCatalogError onRetry={() => { if (forcedState && forcedState !== 'loading') router.replace('/practices'); setRetry(x => x + 1); }}/> :
      visible.length === 0 ? <PracticeCatalogEmpty onReset={reset}/> :
      <div className="practiceGrid">{paged.pageItems.map((practice, index) => <PracticeCard practice={practice} key={`${practice.slug}-${(paged.page-1)*PAGE_SIZES.catalog+index}`}/>)}</div>}
    {!showLoading && !showError && <Pagination {...paged} label="каталог практик" onPageChange={paged.setPage} />}
  </>;
}
