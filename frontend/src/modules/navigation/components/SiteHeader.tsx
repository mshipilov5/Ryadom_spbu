'use client';

import Image from 'next/image';
import Link from 'next/link';
import { type KeyboardEvent, useId, useRef, useState } from 'react';

type NavigationItem = Readonly<{
  href: string;
  label: string;
}>;

type SiteHeaderProps = Readonly<{
  activeHref?: string;
}>;

const NAVIGATION: readonly NavigationItem[] = [
  { href: '/', label: 'Главная' },
  { href: '/focus', label: 'Разобраться' },
  { href: '/wall', label: 'Накопилось' },
  { href: '/practices', label: 'Практики' },
  { href: '/appointments', label: 'Помощь' },
  { href: '/psychoeducation', label: 'Психопросвет' },
  { href: '/events', label: 'События' },
];

/** Shared public navigation. It does not read cookies or user data. */
export function SiteHeader({ activeHref }: SiteHeaderProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleEscape(event: KeyboardEvent<HTMLElement>) {
    if (event.key === 'Escape' && isMenuOpen) {
      setMenuOpen(false);
      toggleRef.current?.focus();
    }
  }

  return (
    <aside className="siteHeader" aria-label="Меню платформы Рядом">
      <div className="siteHeaderInner">
        <div className="siteHeaderTop">
          <Link className="siteBrand" href="/" aria-label="Рядом — главная" onClick={closeMenu}>
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
          <button
            ref={toggleRef}
            type="button"
            className="siteMenuToggle"
            aria-controls={menuId}
            aria-expanded={isMenuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {isMenuOpen ? 'Закрыть' : 'Меню'}
          </button>
        </div>

        <nav
          id={menuId}
          className={`siteNav${isMenuOpen ? ' isOpen' : ''}`}
          aria-label="Разделы"
          onKeyDown={handleEscape}
        >
          {NAVIGATION.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`siteNavLink${href === activeHref ? ' isActive' : ''}`}
              aria-current={href === activeHref ? 'page' : undefined}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="siteHeaderActions">
          <Link className="siteCrisisLink" href="/crisis" onClick={closeMenu}>
            Нужна срочная помощь
          </Link>
          <Link className="siteLoginLink" href="/login" onClick={closeMenu}>
            Войти
          </Link>
        </div>
        <p className="siteSidebarDisclaimer">
          Платформа не ставит диагнозы и не заменяет экстренные службы.
        </p>
      </div>
    </aside>
  );
}
