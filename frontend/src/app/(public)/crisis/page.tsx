import Link from 'next/link';
import { PsychoeducationSidebar } from '@/modules/education/components/PsychoeducationSidebar';
import '../psychoeducation/psychoeducation.css';

export default function CrisisPage() {
  return (
    <div className="psychoShell">
      <PsychoeducationSidebar activeHref="" />
      <main className="psychoMain crisisPage">
        <header className="publicTopbar isCompact">
          <div className="guestBadge" aria-label="Текущий режим: гость">
            <span className="guestAvatar" aria-hidden="true">Г</span>
            <span>Гость</span>
          </div>
        </header>

        <section className="crisisHero">
          <p className="eyebrow crisisEyebrow">Поддержка прямо сейчас</p>
          <h1>Вы не обязаны оставаться с этим в одиночку</h1>
          <p>
            Это демонстрационный кризисный экран UI-only. В реальном продукте контакты,
            часы работы и владельцы данных будут приходить из проверяемого справочника.
          </p>
        </section>

        <section className="crisisGrid" aria-label="Кризисные действия">
          <article className="crisisActionCard isEmergency">
            <h2>Есть непосредственная опасность для жизни или здоровья?</h2>
            <p>Позвоните 112 или попросите человека рядом сделать это. По возможности не оставайтесь один.</p>
            <a className="crisisPrimaryAction" href="tel:112">Позвонить 112</a>
          </article>

          <article className="crisisActionCard">
            <h2>Телефон доверия СПбГУ</h2>
            <p>
              В этой UI-only сборке номер намеренно не подставлен. В интегрированной версии здесь будет
              актуальный контакт и реальные часы работы из административного справочника.
            </p>
          </article>

          <article className="crisisActionCard">
            <h2>Связаться со специалистом</h2>
            <p>В рабочей версии здесь будет безопасный способ связи и честно указанный срок ответа.</p>
          </article>
        </section>

        <Link className="backLink" href="/psychoeducation">← Вернуться в психопросвет</Link>
      </main>
    </div>
  );
}
