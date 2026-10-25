export type ContentType = 'article';

export type MaterialCategory = {
  slug: string;
  name: string;
};

export type MaterialTag = {
  slug: string;
  name: string;
};

export type MaterialPreview = {
  slug: string;
  title: string;
  summary: string;
  imageUrl: string | null;
  category: MaterialCategory;
  tags: MaterialTag[];
  type: ContentType;
  durationMinutes: number;
  contentWarning: string | null;
  author: string;
  reviewer: string;
  reviewedAt: string;
  safeNextStep: string;
};

export type MaterialDetail = MaterialPreview & {
  body: string;
  sources: { title: string; url: string }[];
};

export type FilterOptions = {
  types: ContentType[];
  categories: MaterialCategory[];
  tags: MaterialTag[];
};

export type CatalogFilters = {
  q: string;
  category: string | null;
  tags: string[];
  type: ContentType | null;
};
