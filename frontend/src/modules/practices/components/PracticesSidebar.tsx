import Link from 'next/link';
import type { ReactNode } from 'react';

type NavItem = {
  href: string;
  label: string;
  icon: ReactNode;
};

function HouseIcon() {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4.5 9.2 10 4.8l5.5 4.4v6.3H4.5V9.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M8 15.5v-3.6h4v3.6" stroke="currentColor" strokeWidth="1.6" /></svg>;
}

function FocusIcon() {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="5.8" stroke="currentColor" strokeWidth="1.6" /><circle cx="10" cy="10" r="1.8" fill="currentColor" /></svg>;
}

function HeartIcon() {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 15.6 4.6 10.4a3.5 3.5 0 0 1 4.9-5.1L10 5.8l.5-.5a3.5 3.5 0 0 1 4.9 5.1L10 15.6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>;
}

function DotIcon() {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="2.4" fill="currentColor" /></svg>;
}

function HelpIcon() {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="6.1" stroke="currentColor" strokeWidth="1.6" /><circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.6" /></svg>;
}

function GridIcon() {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="4.2" y="4.2" width="11.6" height="11.6" stroke="currentColor" strokeWidth="1.4" /><path d="M8 4.4v11.2M12 4.4v11.2M4.4 8h11.2M4.4 12h11.2" stroke="currentColor" strokeWidth="1.2" /></svg>;
}

function DiamondIcon() {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3.9 16.1 10 10 16.1 3.9 10 10 3.9Z" stroke="currentColor" strokeWidth="1.6" /></svg>;
}

const links: NavItem[] = [
  { href: '/', label: 'Главная', icon: <HouseIcon /> },
  { href: '/focus', label: 'Разобраться', icon: <FocusIcon /> },
  { href: '/wall', label: 'Накопилось', icon: <HeartIcon /> },
  { href: '/practices', label: 'Практики', icon: <DotIcon /> },
  { href: '/appointments', label: 'Помощь', icon: <HelpIcon /> },
  { href: '/psychoeducation', label: 'Психопросвет', icon: <GridIcon /> },
  { href: '/events', label: 'События', icon: <DiamondIcon /> },
];

export function PracticesSidebar() {
  return (
    <aside className="practicesSidebar" aria-label="Основная навигация">
      <Link className="practicesBrand" href="/" aria-label="Рядом — на главную">
        <span className="brandMark" aria-hidden="true">Р</span>
        <span className="brandText">
          <strong>Рядом</strong>
          <small>платформа СПбГУ</small>
        </span>
      </Link>

      <nav className="practicesNav">
        {links.map(({ href, label, icon }) => {
          const isActive = href === '/practices';
          return (
            <Link
              key={href}
              href={href}
              className={`practicesNavLink ${isActive ? 'isActive' : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="navIcon" aria-hidden="true">{icon}</span>
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="sidebarBottom">
        <Link className="practicesCrisisLink" href="/crisis">
          <span className="crisisDot" aria-hidden="true">!</span>
          <span>Нужна срочная помощь</span>
        </Link>
        <p className="sidebarDisclaimer">
          Платформа не ставит диагнозы и не заменяет экстренные службы
        </p>
      </div>
    </aside>
  );
}
