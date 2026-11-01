import type { ChangeEvent } from 'react';
import { practiceKindLabels } from '@/modules/practices/lib/kinds';
import type { PracticeKind } from '@/modules/practices/model/types';

const kinds = Object.entries(practiceKindLabels) as [PracticeKind, string][];

type Props = {
  query: string;
  selectedKind: PracticeKind | null;
  onQueryChange: (value: string) => void;
  onKindChange: (kind: PracticeKind | null) => void;
  onReset: () => void;
};

export function PracticeFilters({ query, selectedKind, onQueryChange, onKindChange, onReset }: Props) {
  const hasFilters = Boolean(query.trim() || selectedKind);

  return (
    <section className="practiceControls" aria-label="Поиск и фильтры практик">
      <label className="searchField">
        <span className="searchIcon" aria-hidden="true">⌕</span>
        <span className="visuallyHidden">Поиск практик</span>
        <input
          value={query}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onQueryChange(event.target.value)}
          placeholder="Найти практику по названию или теме"
          type="search"
        />
      </label>

      <div className="filterGroup">
        <span className="filterLabel">Тип практики</span>
        <div className="filterScroller">
          <button
            type="button"
            className={`filterChip ${selectedKind === null ? 'isSelected' : ''}`}
            onClick={() => onKindChange(null)}
            aria-pressed={selectedKind === null}
          >
            Все
          </button>
          {kinds.map(([kind, label]) => (
            <button
              type="button"
              key={kind}
              className={`filterChip ${selectedKind === kind ? 'isSelected' : ''}`}
              onClick={() => onKindChange(kind)}
              aria-pressed={selectedKind === kind}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <button className="resetButton" type="button" onClick={onReset} disabled={!hasFilters}>
        Сбросить фильтры
      </button>
    </section>
  );
}
