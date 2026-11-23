import type { CatalogFilters, MaterialPreview } from '../model/types';

export function filterMaterials(materials: MaterialPreview[], filters: CatalogFilters) {
  const q = filters.q.trim().toLocaleLowerCase('ru-RU');
  return materials.filter((material) => {
    if (filters.type && material.type !== filters.type) return false;
    if (filters.category && material.category.slug !== filters.category) return false;
    if (filters.tags.length && !filters.tags.every((tag) => material.tags.some((x) => x.slug === tag))) return false;
    if (!q) return true;
    return `${material.title} ${material.summary}`.toLocaleLowerCase('ru-RU').includes(q);
  });
}
