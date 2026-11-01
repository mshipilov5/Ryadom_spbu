'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PracticeCard } from '@/modules/practices/components/PracticeCard';
import {
  PracticeCatalogEmpty,
  PracticeCatalogError,
  PracticeCatalogLoading,
} from '@/modules/practices/components/PracticeCatalogStates';
import { PracticeFilters } from '@/modules/practices/components/PracticeFilters';
import { filterPractices } from '@/modules/practices/lib/filterPractices';
import { practices } from '@/modules/practices/mock/practices';
import type { PracticeKind } from '@/modules/practices/model/types';

export function PracticeCatalogClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const forcedState = searchParams.get('state');
  const [query, setQuery] = useState('');
  const [selectedKind, setSelectedKind] = useState<PracticeKind | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (forcedState === 'loading') {
      setLoading(true);
      return;
    }

    setLoading(true);
    const timer = window.setTimeout(() => setLoading(false), 450);
    return () => window.clearTimeout(timer);
  }, [forcedState]);

  const filtered = useMemo(
    () => filterPractices(practices, query, selectedKind),
    [query, selectedKind],
  );

  const visible = useMemo(() => {
    if (forcedState === 'empty') return [];
    if (forcedState === 'many') {
      return Array.from({ length: 30 }, (_, index) => practices[index % practices.length]);
    }
    return filtered;
  }, [filtered, forcedState]);

  const reset = () => {
    setQuery('');
    setSelectedKind(null);
    if (forcedState) router.replace('/practices');
  };

  return (
    <>
      <PracticeFilters
        query={query}
        selectedKind={selectedKind}
        onQueryChange={setQuery}
        onKindChange={setSelectedKind}
        onReset={reset}
      />

      <div className="catalogResultMeta" aria-live="polite">
        {loading ? 'Загружаем практики…' : `Найдено: ${visible.length}`}
      </div>

      {loading ? (
        <PracticeCatalogLoading />
      ) : forcedState === 'error' ? (
        <PracticeCatalogError onRetry={() => router.replace('/practices')} />
      ) : visible.length === 0 ? (
        <PracticeCatalogEmpty onReset={reset} />
      ) : (
        <div className="practiceGrid">
          {visible.map((practice, index) => (
            <PracticeCard practice={practice} key={`${practice.slug}-${index}`} />
          ))}
        </div>
      )}
    </>
  );
}
