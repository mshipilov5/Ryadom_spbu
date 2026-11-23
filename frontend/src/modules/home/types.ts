export type HomeFeed = {
  message: string;
  event: { title: string; description: string; href: string } | null;
  practice: { title: string; description: string; href: string } | null;
};
export function isHomeFeed(value: unknown): value is HomeFeed {
  if (!value || typeof value !== 'object') return false;
  const v = value as Partial<HomeFeed>;
  const validItem = (item: unknown) => item === null || (typeof item === 'object' && item !== null &&
    typeof (item as {title?:unknown}).title === 'string' &&
    typeof (item as {description?:unknown}).description === 'string' &&
    typeof (item as {href?:unknown}).href === 'string');
  return typeof v.message === 'string' && validItem(v.event) && validItem(v.practice);
}
