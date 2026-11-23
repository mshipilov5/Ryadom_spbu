import { notFound } from 'next/navigation';
import { ScenarioScreen } from '@/modules/ui-states/components/ScenarioScreen';
import { UiStatesShell } from '@/modules/ui-states/components/UiStatesShell';
import { isScenarioId, scenarios } from '@/modules/ui-states/model/scenarios';
import '../ui-states.css';

export function generateStaticParams() { return scenarios.map(({ id }) => ({ scenario: id })); }

export default async function Page({ params }: { params: Promise<{ scenario: string }> }) {
  const { scenario } = await params;
  if (!isScenarioId(scenario)) notFound();
  const meta = scenarios.find(item => item.id === scenario)!;
  return <UiStatesShell activeScenario={scenario}>
    <div className="ux-header">
      <div><div className="ux-kicker">ISSUE #128 · КАТАЛОГ UI-СОСТОЯНИЙ</div><h1>{meta.title}</h1><p>{meta.summary}</p></div>
      <span className="ux-status">{meta.status}</span>
    </div>
    <ScenarioScreen key={scenario} id={scenario} />
    <p className="ux-demo-note">Демонстрация интерфейсного состояния. Данные и действия в каталоге моковые; реальная интеграция с API и управление правами выполняются отдельно.</p>
  </UiStatesShell>;
}
