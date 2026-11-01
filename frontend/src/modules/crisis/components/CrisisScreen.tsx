import { CopySupportMessage } from './CopySupportMessage';
import {
  crisisContacts,
  groundingSteps,
  safetySteps,
  supportMessage,
} from '../mock/crisis';

export function CrisisScreen() {
  const emergency = crisisContacts.find((contact) => contact.isEmergency);
  const supportContacts = crisisContacts.filter((contact) => !contact.isEmergency);

  return (
    <div className="crisisScreen">
      <header className="crisisIntro">
        <p className="crisisKicker">Поддержка прямо сейчас</p>
        <h1>Вы не обязаны оставаться с этим в одиночку</h1>
        <p className="crisisLead">
          Выберите самый безопасный вариант на ближайшие минуты. Платформа не является
          экстренной службой и не заменяет профессиональную помощь.
        </p>
      </header>

      {emergency && (
        <section className="crisisEmergency" aria-labelledby="crisis-emergency-title">
          <div className="crisisEmergencyIcon" aria-hidden="true">!</div>
          <div className="crisisEmergencyContent">
            <p className="crisisSectionLabel">Если есть непосредственная опасность</p>
            <h2 id="crisis-emergency-title">Для жизни или здоровья — звоните 112</h2>
            <p>
              Позвоните сами или попросите человека рядом сделать это. По возможности
              не оставайтесь в одиночку до получения помощи.
            </p>
            <a className="crisisEmergencyButton" href={emergency.href}>
              Позвонить 112
            </a>
          </div>
        </section>
      )}

      <section className="crisisSection" aria-labelledby="crisis-contacts-title">
        <div className="crisisSectionHeading">
          <div>
            <p className="crisisSectionLabel">Контакты</p>
            <h2 id="crisis-contacts-title">Куда можно обратиться</h2>
          </div>
          <p>Контакты кризисной помощи должны регулярно подтверждаться владельцем справочника.</p>
        </div>

        <div className="crisisContactGrid">
          {supportContacts.map((contact) => (
            <article key={contact.id} className="crisisContactCard">
              <div>
                <h3>{contact.title}</h3>
                <p>{contact.description}</p>
              </div>
              <a className="crisisPhoneLink" href={contact.href}>{contact.phone}</a>
              <p className="crisisHours">{contact.hours}</p>
            </article>
          ))}

          <article className="crisisContactCard crisisContactCardMuted">
            <div>
              <h3>Связаться со специалистом</h3>
              <p>
                Для неэкстренной ситуации можно перейти к выбору доступного формата помощи.
              </p>
            </div>
            <a className="crisisOutlineButton" href="/appointments">
              Перейти к вариантам помощи
            </a>
            <p className="crisisHours">Срок ответа должен быть указан честно на странице записи.</p>
          </article>
        </div>
      </section>

      <div className="crisisSupportGrid">
        <section className="crisisSupportCard" aria-labelledby="crisis-safety-title">
          <p className="crisisSectionLabel">На ближайшие минуты</p>
          <h2 id="crisis-safety-title">Сделать ситуацию безопаснее</h2>
          <ol className="crisisStepList">
            {safetySteps.map((step, index) => (
              <li key={step}>
                <span aria-hidden="true">{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="crisisSupportCard" aria-labelledby="crisis-grounding-title">
          <p className="crisisSectionLabel">Короткое заземление</p>
          <h2 id="crisis-grounding-title">Вернуться к тому, что происходит вокруг</h2>
          <ul className="crisisGroundingList">
            {groundingSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
          <p className="crisisCardNote">Если упражнение неприятно или усиливает напряжение — прекратите.</p>
        </section>
      </div>

      <section className="crisisMessageSection" aria-labelledby="crisis-message-title">
        <div className="crisisSectionHeading">
          <div>
            <p className="crisisSectionLabel">Не оставайтесь одни</p>
            <h2 id="crisis-message-title">Отправьте сообщение близкому человеку</h2>
          </div>
          <p>Можно скопировать этот текст и отправить человеку, которому вы доверяете.</p>
        </div>
        <CopySupportMessage message={supportMessage} />
      </section>

      <aside className="crisisNotice" aria-label="Важная информация">
        <strong>Важно</strong>
        <p>
          Платформа не ставит диагнозы и не заменяет экстренные службы. Если опасность
          непосредственная, используйте 112. Не ориентируйтесь на обещание мгновенного ответа
          от университетских служб, если оно явно не указано в актуальном расписании.
        </p>
      </aside>
    </div>
  );
}
