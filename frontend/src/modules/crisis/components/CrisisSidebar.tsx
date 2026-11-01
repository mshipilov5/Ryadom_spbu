import Link from 'next/link';
import type { ReactNode } from 'react';

type NavItem = {
  href: string;
  label: string;
  icon: ReactNode;
};

function Icon({ children }: { children: ReactNode }) {
  return <span className="crisisNavIcon" aria-hidden="true">{children}</span>;
}

const navItems: NavItem[] = [
  {
    href: '/',
    label: 'Главная',
    icon: <Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V20h13v-9.5"/></svg></Icon>,
  },
  {
    href: '/focus',
    label: 'Разобраться',
    icon: <Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/></svg></Icon>,
  },
  {
    href: '/wall',
    label: 'Накопилось',
    icon: <Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"/></svg></Icon>,
  },
  {
    href: '/practices',
    label: 'Практики',
    icon: <Icon><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="3"/></svg></Icon>,
  },
  {
    href: '/appointments',
    label: 'Помощь',
    icon: <Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/></svg></Icon>,
  },
  {
    href: '/psychoeducation',
    label: 'Психопросвет',
    icon: <Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></svg></Icon>,
  },
  {
    href: '/events',
    label: 'События',
    icon: <Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m12 4 8 8-8 8-8-8 8-8Z"/></svg></Icon>,
  },
];

export function CrisisSidebar() {
  return (
    <aside className="crisisSidebar" aria-label="Основная навигация">
      <Link href="/" className="crisisBrand">
        <span className="crisisBrandMark" aria-hidden="true">Р</span>
        <span className="crisisBrandText">
          <strong>РЯДОМ</strong>
          <small>Платформа СПБГУ</small>
        </span>
      </Link>

      <nav className="crisisNav">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="crisisNavLink">
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="crisisSidebarBottom">
        <Link href="/crisis" className="crisisSidebarEmergency isActive" aria-current="page">
          <span className="crisisSidebarEmergencyIcon" aria-hidden="true">!</span>
          <span>Нужна срочная помощь</span>
        </Link>
        <p className="crisisSidebarDisclaimer">
          Платформа не ставит диагнозы и не заменяет экстренные службы
        </p>
      </div>
    </aside>
  );
}
