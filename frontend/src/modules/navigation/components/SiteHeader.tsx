import Image from 'next/image';
import Link from 'next/link';

type NavLink = { href: string; label: string };

const links: NavLink[] = [
  { href: '/', label: 'Главная' },
  { href: '/focus', label: 'Разобраться' },
  { href: '/wall', label: 'Накопилось' },
  { href: '/practices', label: 'Практики' },
  { href: '/appointments', label: 'Помощь' },
  { href: '/psychoeducation', label: 'Психопросвет' },
  { href: '/events', label: 'События' },
];

/**
 * Общая навигация публичных разделов.
 * Логотип СПбГУ: локальная копия предоставленного изображения, без
 * масштабирования по разным осям и без цветового фильтра.
 * Белая версия применяется только на однотонном тёмном фоне.
 */
export function SiteHeader({ activeHref }: { activeHref?: string }) {
  return (
    <aside className="siteHeader" aria-label="Меню платформы Рядом">
      <div className="siteHeaderInner">
        <Link className="siteBrand" href="/" aria-label="Рядом — главная">
          <Image
            className="siteBrandLogo"
            src="/spbu-logo-white.png"
            alt="СПбГУ"
            width={75}
            height={61}
            priority
          />
          <span className="siteBrandText">
            <strong className="siteBrandProduct">Рядом</strong>
            <small>психологическая поддержка</small>
          </span>
        </Link>

        <nav className="siteNav" aria-label="Разделы">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`siteNavLink ${href === activeHref ? 'isActive' : ''}`}
              aria-current={href === activeHref ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="siteHeaderActions">
          <Link className="siteCrisisLink" href="/crisis">Нужна срочная помощь</Link>
          <Link className="siteLoginLink" href="/login">Войти</Link>
        </div>
        <p className="siteSidebarDisclaimer">
          Платформа не ставит диагнозы и не заменяет экстренные службы.
        </p>
      </div>
    </aside>
  );
}
