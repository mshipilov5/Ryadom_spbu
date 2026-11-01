import { CrisisScreen } from '@/modules/crisis/components/CrisisScreen';
import { CrisisSidebar } from '@/modules/crisis/components/CrisisSidebar';
import './crisis.css';

export default function CrisisPage() {
  return (
    <div className="crisisShell">
      <CrisisSidebar />

      <main className="crisisMain">
        <header className="crisisTopbar">
          <div className="crisisGuestBadge" aria-label="Текущий режим: гость">
            <span className="crisisGuestAvatar" aria-hidden="true">Г</span>
            <span>Гость</span>
          </div>
        </header>

        <CrisisScreen />
      </main>
    </div>
  );
}
