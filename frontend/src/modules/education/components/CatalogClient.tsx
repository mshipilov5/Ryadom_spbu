'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { psychoeducationFilterOptions, psychoeducationMaterials } from '../mock/materials';
import { filterMaterials } from '../lib/filterMaterials';
import type { CatalogFilters as Filters } from '../model/types';
import { CatalogFilters } from './CatalogFilters';
import { MaterialCard } from './MaterialCard';
import { CatalogLoading, CatalogEmpty, CatalogError } from './CatalogStates';

const initial: Filters = {
  q: '',
  category: null,
  tags: [],
  type: 'article',
};

export function CatalogClient() {
  const router = useRouter();
  const params = useSearchParams();
  const [filters, setFilters] = useState<Filters>(initial);
  const [loading, setLoading] = useState(true);
  const state = params.get('state');

  useEffect(() => {
    if (state === 'loading') {
      setLoading(true);
      return;
    }

    setLoading(true);
    const timer = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, [state]);

  const sourceMaterials = useMemo(() => {
    if (state !== 'many') {
      return psychoeducationMaterials;
    }

    return Array.from({ length: 5 }, () => psychoeducationMaterials).flat();
  }, [state]);

  const materials = useMemo(
    () => filterMaterials(sourceMaterials, filters),
    [sourceMaterials, filters],
  );

  const reset = () => setFilters(initial);
  const visibleMaterials = state === 'empty' ? [] : materials;
  const hasError = state === 'error';

  const retry = () => {
    router.replace('/psychoeducation');
  };

  return (
    <>
      <CatalogFilters
        filters={filters}
        options={psychoeducationFilterOptions}
        onChange={setFilters}
        onReset={reset}
      />

      <div className="catalogResultMeta" aria-live="polite">
        {!loading && !hasError && (
          <span>
            {visibleMaterials.length === 1
              ? 'Найден 1 материал'
              : `Найдено материалов: ${visibleMaterials.length}`}
          </span>
        )}
      </div>

      {loading ? (
        <CatalogLoading />
      ) : hasError ? (
        <CatalogError onRetry={retry} />
      ) : visibleMaterials.length === 0 ? (
        <CatalogEmpty onReset={reset} />
      ) : (
        <div className="materialsGrid">
          {visibleMaterials.map((material, index) => (
            <MaterialCard key={`${material.slug}-${index}`} material={material} />
          ))}
        </div>
      )}
    </>
  );
}
