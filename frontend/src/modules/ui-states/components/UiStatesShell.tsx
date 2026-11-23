import Link from 'next/link';
import type { ReactNode } from 'react';
import { scenarioGroups, scenarios, type ScenarioId } from '../model/scenarios';

const mainNav = [
  { label: 'Главная', href: '/' },
  { label: 'Разобраться' },
  { label: 'Накопилось' },
  { label: 'Практики' },
  { label: 'Помощь' },
  { label: 'Психопросвет', href: '/psychoeducation' },
  { label: 'События' },
];

export function UiStatesShell({ children, activeScenario }: { children: ReactNode; activeScenario: ScenarioId }) {
  return <div className="ux-app">
    <aside className="ux-sidebar" aria-label="Навигация по платформе">
      <Link className="ux-brand" href="/" aria-label="Рядом — главная"><span className="ux-brand-mark">Р</span><span><strong>Рядом</strong><small>платформа СПбГУ</small></span></Link>
      <nav className="ux-main-nav" aria-label="Основные разделы">
        {mainNav.map((item, index) => item.href
          ? <Link key={item.label} className="ux-main-link" href={item.href}><span className="ux-nav-symbol" aria-hidden="true">{['⌂','◎','♡','•','◉','▦','◇'][index]}</span>{item.label}</Link>
          : <span key={item.label} className="ux-main-link ux-nav-inactive" aria-disabled="true"><span className="ux-nav-symbol" aria-hidden="true">{['⌂','◎','♡','•','◉','▦','◇'][index]}</span>{item.label}</span>)}
        <div className="ux-main-separator" />
        <Link href={`/ui-states/${activeScenario}`} aria-current="page" className="ux-main-link ux-main-active"><span className="ux-nav-symbol" aria-hidden="true">◈</span>UI-состояния</Link>
      </nav>
      <div className="ux-sidebar-bottom">
        <Link className="ux-need-help" href="/crisis"><span aria-hidden="true">✚</span> Нужна срочная помощь</Link>
        <p>Платформа не ставит диагнозы и не заменяет экстренные службы</p>
      </div>
    </aside>
    <div className="ux-page">
      <div className="ux-topbar"><span>Библиотека состояний интерфейса</span><span className="ux-user"><span className="ux-user-avatar">Д</span>Демо</span></div>
      <main className="ux-container">
        <div className="ux-workspace">
          <nav className="ux-scenarios" aria-label="Демонстрационные сценарии">
            <div className="ux-scenarios-top"><strong>Сценарии</strong><span>{scenarios.length}</span></div>
            {scenarioGroups.map(group => <div key={group} className="ux-scenario-group"><div className="ux-scenario-category">{group}</div>
              {scenarios.filter(s => s.category === group).map(s => <Link key={s.id} href={`/ui-states/${s.id}`} aria-current={activeScenario === s.id ? 'page' : undefined} className={`ux-scenario-link ${activeScenario === s.id ? 'ux-scenario-active' : ''}`}>{s.title}</Link>)}
            </div>)}
          </nav>
          <div className="ux-content">{children}</div>
        </div>
      </main>
    </div>
  </div>;
}
