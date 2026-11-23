import type { ChangeEvent } from 'react';
import { contentTypeFilterLabels } from '../lib/contentType';
import type { CatalogFilters as Filters, FilterOptions } from '../model/types';

export function CatalogFilters({
  filters,
  options,
  onChange,
  onReset,
}: {
  filters: Filters;
  options: FilterOptions;
  onChange: (value: Filters) => void;
  onReset: () => void;
}) {
  const toggleTag = (slug: string) => {
    onChange({
      ...filters,
      tags: filters.tags.includes(slug)
        ? filters.tags.filter((tag) => tag !== slug)
        : [...filters.tags, slug],
    });
  };

  const active = Boolean(filters.q.trim()) || Boolean(filters.category) || filters.tags.length > 0;

  return (
    <section className="catalogControls" aria-label="Поиск и фильтры психопросвета">
      <label className="searchField">
        <span className="searchIcon" aria-hidden="true">⌕</span>
        <span className="srOnly">Поиск по материалам</span>
        <input
          type="search"
          maxLength={100}
          value={filters.q}
          placeholder="Поиск по темам, практикам и состояниям"
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange({ ...filters, q: event.target.value })}
        />
      </label>

      <div className="filterGroup">
        <span className="filterLabel">Тип материала</span>
        <div className="filterScroller">
          {options.types.map((type) => (
            <button
              type="button"
              key={type}
              className={`filterChip ${filters.type === type ? 'isSelected' : ''}`}
              aria-pressed={filters.type === type}
              onClick={() => onChange({ ...filters, type })}
            >
              {contentTypeFilterLabels[type]}
            </button>
          ))}
        </div>
      </div>

      <div className="filterGroup">
        <span className="filterLabel">Раздел</span>
        <div className="filterScroller">
          <button
            type="button"
            className={`filterChip ${filters.category === null ? 'isSelected' : ''}`}
            aria-pressed={filters.category === null}
            onClick={() => onChange({ ...filters, category: null })}
          >
            Все
          </button>
          {options.categories.map((category) => (
            <button
              type="button"
              key={category.slug}
              className={`filterChip ${filters.category === category.slug ? 'isSelected' : ''}`}
              aria-pressed={filters.category === category.slug}
              onClick={() => onChange({ ...filters, category: category.slug })}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="filterGroup">
        <span className="filterLabel">Теги</span>
        <div className="filterScroller">
          {options.tags.map((tag) => (
            <button
              type="button"
              key={tag.slug}
              title={tag.name}
              aria-pressed={filters.tags.includes(tag.slug)}
              className={`filterChip ${filters.tags.includes(tag.slug) ? 'isSelected' : ''}`}
              onClick={() => toggleTag(tag.slug)}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>

      {active && (
        <button className="resetButton" type="button" onClick={onReset}>
          Сбросить фильтры
        </button>
      )}
    </section>
  );
}
