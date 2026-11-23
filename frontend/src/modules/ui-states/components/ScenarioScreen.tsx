'use client';

import Link from 'next/link';
import { useState, type FormEvent, type ReactNode } from 'react';
import type { ScenarioId } from '../model/scenarios';

const APPOINTMENT_FORM_URL = 'https://anketa.spbu.ru/psikhologicheskaya-klinika-konsultatsiya';

function Stage({ children, note = 'Демонстрационный сценарий' }: { children: ReactNode; note?: string }) {
  return <section className="ux-panel ux-stage" aria-label="Предпросмотр состояния">
    <div className="ux-stage-head"><span className="ux-overline">ПРЕДПРОСМОТР ЭКРАНА</span><span className="ux-mock-pill">{note}</span></div>
    {children}
  </section>;
}

function Buttons({ children }: { children: ReactNode }) { return <div className="ux-buttons">{children}</div>; }
function Primary({ children, onClick, disabled }: { children: ReactNode; onClick: () => void; disabled?: boolean }) {
  return <button type="button" className="ux-btn ux-btn-primary" onClick={onClick} disabled={disabled}>{children}</button>;
}
function Secondary({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return <button type="button" className="ux-btn ux-btn-plain" onClick={onClick}>{children}</button>;
}
function PublicLinks() {
  return <Buttons><Link className="ux-btn ux-btn-primary" href="/psychoeducation">Открытые материалы</Link><Link className="ux-btn ux-btn-plain" href="/crisis">Кризисный раздел</Link></Buttons>;
}

function ConsentScene({ kind }: { kind: 'favorites' | 'publication' }) {
  const [decision, setDecision] = useState<'none' | 'allow' | 'later'>('none');
  const isFavorites = kind === 'favorites';
  return <Stage note="Выбор необязателен">
    {decision === 'none' ? <div className="ux-consent-paper" role="group" aria-labelledby="ux-consent-heading">
      <span className="ux-overline">ВАШ ВЫБОР</span>
      <h2 id="ux-consent-heading">{isFavorites ? 'Сохранять материалы в избранное?' : 'Разрешить публикацию текста?'}</h2>
      <p>{isFavorites ? 'Чтобы выбранные материалы были доступны в личном кабинете, нужно ваше отдельное согласие на сохранение списка избранного.' : 'Если вы решите опубликовать текст, он станет доступен другим пользователям после проверки модератором. Перед отправкой нужно ваше согласие на публикацию.'}</p>
      <ul className="ux-consent-items">
        {isFavorites ? <><li>Сохраняются только выбранные вами материалы.</li><li>Без согласия читать статьи и практики можно как раньше.</li><li>Вы можете отказаться от сохранения сейчас.</li></> : <><li>Перед публикацией текст проходит премодерацию.</li><li>Не публикуйте личные данные — свои или чужие.</li><li>Без согласия ваш текст не отправляется.</li></>}
      </ul>
      <Buttons><Primary onClick={() => setDecision('allow')}>Разрешить</Primary><Secondary onClick={() => setDecision('later')}>Не сейчас</Secondary></Buttons>
      <p className="ux-inline-note">Этот выбор относится только к указанному действию, а не ко всем функциям платформы.</p>
    </div> : <div className="ux-outcome" role="status">
      <div className={`ux-notice ${decision === 'allow' ? 'ux-notice-success' : ''}`}>
        <strong>{decision === 'allow' ? 'Согласие получено (демо)' : 'Продолжаем без согласия'}</strong>
        {decision === 'allow'
          ? (isFavorites ? 'В настоящем приложении материал можно будет сохранить после подключения личного кабинета.' : 'В настоящем приложении текст можно будет направить на премодерацию. В этом макете ничего не публикуется.')
          : (isFavorites ? 'Сохранение избранного отключено. Материалы остаются доступны для чтения без него.' : 'Публикация не выполнена. Вы можете вернуться к тексту позже.')}
      </div>
      <Buttons><Secondary onClick={() => setDecision('none')}>Выбрать снова</Secondary></Buttons>
    </div>}
  </Stage>;
}

function FormErrorScene() {
  const [email, setEmail] = useState('неверная-почта');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [complete, setComplete] = useState(false);
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const nameValid = name.trim().length >= 2;
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); if (emailValid && nameValid) setComplete(true); };
  return <Stage note="Форма на моках">
    <div className="ux-half">
      <h2 className="ux-preview-title">Проверьте данные</h2>
      <p className="ux-body">Мы отметили поля, которые нужно исправить. Уже введённые значения сохраняются.</p>
      {complete ? <div className="ux-notice ux-notice-success" role="status"><strong>Данные проверены</strong>В демонстрации форма не отправляется на сервер.</div> : <form onSubmit={handleSubmit} noValidate>
        <div className="ux-form-row">
          <label className="ux-label" htmlFor="ux-email">Электронная почта</label>
          <input className="ux-field" id="ux-email" type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} aria-invalid={submitted && !emailValid} aria-describedby={submitted && !emailValid ? 'ux-email-error' : undefined} />
          {submitted && !emailValid && <p className="ux-hint" id="ux-email-error" role="alert">Введите почту в формате name@example.com.</p>}
        </div>
        <div className="ux-form-row">
          <label className="ux-label" htmlFor="ux-name">Как к вам обращаться</label>
          <input className="ux-field" id="ux-name" type="text" autoComplete="name" value={name} onChange={e => setName(e.target.value)} aria-invalid={submitted && !nameValid} aria-describedby={submitted && !nameValid ? 'ux-name-error' : undefined} />
          {submitted && !nameValid && <p className="ux-hint" id="ux-name-error" role="alert">Укажите имя (не менее двух символов).</p>}
        </div>
        <button className="ux-btn ux-btn-primary" type="submit">Продолжить</button>
      </form>}
      {complete && <Buttons><Secondary onClick={() => { setComplete(false); setSubmitted(false); }}>Изменить данные</Secondary></Buttons>}
    </div>
  </Stage>;
}

function ErrorScene({ type }: { type: 'offline' | 'server' }) {
  const [retried, setRetried] = useState(false);
  const offline = type === 'offline';
  return <Stage note="Состояние без реального запроса">
    <div className="ux-icon-plate ux-icon-plate-warn" aria-hidden="true">{offline ? '↯' : '!'}</div>
    <h2 className="ux-preview-title">{offline ? 'Нет подключения к интернету' : 'Сервис временно недоступен'}</h2>
    <p className="ux-body">{offline
      ? 'Проверьте соединение и попробуйте снова. Введённые данные не пропали — они останутся в форме, пока эта страница открыта.'
      : 'Сейчас не удаётся выполнить действие. Попробуйте чуть позже. Если вам нужны открытые материалы, они доступны без входа.'}</p>
    {retried && <div className="ux-notice ux-notice-warn" role="status"><strong>Повторная попытка (демо)</strong>{offline ? 'В макете сетевой запрос не выполняется. В реальном приложении здесь будет проверка соединения и повторная отправка.' : 'В макете сервис остаётся недоступным, чтобы можно было проверить поведение при повторной ошибке.'}</div>}
    <Buttons><Primary onClick={() => setRetried(true)}>Попробовать снова</Primary><Link className="ux-btn ux-btn-plain" href="/psychoeducation">Открытые материалы</Link></Buttons>
  </Stage>;
}

function EmptyScene({ kind }: { kind: 'favorites' | 'events' | 'moderation' }) {
  const [reset, setReset] = useState(false);
  const [updated, setUpdated] = useState(false);
  const favorites = kind === 'favorites';
  const events = kind === 'events';
  return <Stage note={kind === 'moderation' ? 'Вид модератора (макет)' : 'Пустой список'}>
    {events && reset ? <>
      <div className="ux-icon-plate ux-icon-plate-good" aria-hidden="true">✓</div><h2 className="ux-preview-title">Фильтры сброшены</h2>
      <p className="ux-body">Теперь отображаются все мероприятия. Ниже — пример элемента для демонстрации.</p>
      <article className="ux-card ux-card-soft"><span className="ux-tag">Демонстрация</span><h3 className="ux-title-sm" style={{marginTop:10}}>Групповая встреча по управлению стрессом</h3><p className="ux-inline-note">Событие приведено для тестирования состояния, не является настоящим анонсом.</p></article>
      <Buttons><Secondary onClick={() => setReset(false)}>Вернуть пустой результат</Secondary></Buttons>
    </> : <>
      <div className="ux-icon-plate" aria-hidden="true">{favorites ? '♡' : events ? '▦' : '✓'}</div>
      <h2 className="ux-preview-title">{favorites ? 'Здесь пока ничего нет' : events ? 'По выбранным фильтрам мероприятий нет' : 'В очереди нет новых материалов'}</h2>
      <p className="ux-body">{favorites ? 'Когда вы добавите статью или практику в избранное, она появится здесь. Пока можно продолжить знакомство с материалами.' : events ? 'Попробуйте сбросить фильтры или выбрать другую дату.' : 'Все доступные заявки проверены. Новые материалы появятся здесь после отправки пользователями.'}</p>
      {updated && <p className="ux-inline-note" role="status">Список проверен в демонстрационном режиме. Новых материалов пока нет.</p>}
      <Buttons>{favorites ? <Link className="ux-btn ux-btn-primary" href="/psychoeducation">Перейти к материалам</Link> : events ? <Primary onClick={() => setReset(true)}>Сбросить фильтры</Primary> : <Primary onClick={() => setUpdated(true)}>Обновить очередь</Primary>}</Buttons>
    </>}
  </Stage>;
}

function SsoScene() {
  const [retried, setRetried] = useState(false);
  return <Stage note="Вход через СПбГУ">
    <div className="ux-icon-plate ux-icon-plate-warn" aria-hidden="true">!</div>
    <h2 className="ux-preview-title">Войти сейчас не удалось</h2>
    <p className="ux-body">Открытые материалы и кризисный раздел доступны без входа. Попробуйте позже.</p>
    {retried && <div className="ux-notice ux-notice-warn" role="status">Повторная попытка в демо не обращается к университетскому SSO. Ошибка показана повторно.</div>}
    <Buttons><Primary onClick={() => setRetried(true)}>Повторить вход</Primary><Link className="ux-btn ux-btn-plain" href="/psychoeducation">Продолжить без входа</Link></Buttons>
    <p className="ux-inline-note">Для получения срочной помощи вход не требуется.</p>
    <p><Link className="ux-link" href="/crisis">Открыть кризисный раздел</Link></p>
  </Stage>;
}

function AppointmentScene() {
  return <Stage note="Система записи не ответила">
    <div className="ux-icon-plate ux-icon-plate-warn" aria-hidden="true">↗</div>
    <h2 className="ux-preview-title">Не удалось загрузить доступное время</h2>
    <p className="ux-body">Сейчас мы не можем получить данные из системы записи. Вы можете оставить заявку через действующую форму Психологической клиники СПбГУ.</p>
    <div className="ux-notice ux-notice-warn"><strong>Как продолжить</strong>Форма откроется на сайте СПбГУ. Доступное время и сроки ответа уточняются непосредственно в службе.</div>
    <Buttons><a className="ux-btn ux-btn-primary" href={APPOINTMENT_FORM_URL} target="_blank" rel="noopener noreferrer">Открыть форму записи СПбГУ</a><Link className="ux-btn ux-btn-plain" href="/crisis">Нужна срочная помощь</Link></Buttons>
    <p className="ux-inline-note">Внешняя ссылка предназначена для обучающихся и сотрудников СПбГУ. Никакой заявки из этого демонстрационного экрана не отправляется.</p>
  </Stage>;
}

function ExpiredContactScene() {
  const [rolePreview, setRolePreview] = useState<'public' | 'admin'>('public');
  return <Stage note="Раздельное отображение">
    <div className="ux-segment" role="group" aria-label="Выбор демонстрационного режима">
      <button type="button" aria-pressed={rolePreview === 'public'} onClick={() => setRolePreview('public')}>Публичный экран</button>
      <button type="button" aria-pressed={rolePreview === 'admin'} onClick={() => setRolePreview('admin')}>Предпросмотр администратора</button>
    </div>
    <h2 className="ux-preview-title">{rolePreview === 'public' ? 'Поддержка прямо сейчас' : 'Контакты, требующие проверки'}</h2>
    {rolePreview === 'public' ? <>
      <p className="ux-body">Если есть непосредственная опасность для жизни или здоровья, позвоните в экстренные службы.</p>
      <div className="ux-contact-card"><h3>Экстренная помощь</h3><strong>112</strong><p>Единый номер экстренных служб в России. Для вызова экстренной помощи.</p><a className="ux-btn ux-btn-danger" href="tel:112">Позвонить 112</a></div>
      <p className="ux-inline-note">На публичном экране нет неподтверждённых телефонов и технических сообщений об их проверке.</p>
    </> : <>
      <p className="ux-body">Административный предпросмотр показывает только состояние справочника, не настоящие данные пользователей.</p>
      <div className="ux-admin-panel" role="status"><h3>Контакт исключён из публичной выдачи</h3><p><strong>Запись:</strong> mock-contact-01</p><p><strong>Причина:</strong> истёк срок проверки актуальности.</p><p><strong>Действие:</strong> проверить номер, часы и владельца контакта, затем повторно опубликовать.</p><p><strong>Статус:</strong> ожидает проверки ответственным.</p></div>
      <p className="ux-inline-note">Переключатель здесь предназначен исключительно для дизайн-превью и не заменяет авторизацию или проверку роли на backend.</p>
    </>}
  </Stage>;
}

function LogoutScene() {
  const [step, setStep] = useState<'account' | 'confirm' | 'guest'>('account');
  return <Stage note="Локальный сценарий выхода">
    {step === 'guest' ? <>
      <div className="ux-icon-plate ux-icon-plate-good" aria-hidden="true">✓</div>
      <h2 className="ux-preview-title">Вы вышли из аккаунта</h2>
      <p className="ux-body">Личные функции теперь недоступны. Вы можете продолжить просматривать открытые материалы без входа.</p>
      <div className="ux-notice ux-notice-success" role="status"><strong>Гостевой режим</strong>Избранное, личные записи и настройки аккаунта недоступны до повторного входа.</div>
      <PublicLinks /><Buttons><Secondary onClick={() => setStep('account')}>Снова показать состояние входа (демо)</Secondary></Buttons>
    </> : <>
      <h2 className="ux-preview-title">{step === 'confirm' ? 'Выйти из аккаунта?' : 'Личный кабинет'}</h2>
      <p className="ux-body">{step === 'confirm' ? 'После выхода личные материалы и настройки станут недоступны до следующего входа. Открытые разделы останутся доступны.' : 'Вы вошли как студент. Здесь доступны функции, требующие аккаунта.'}</p>
      <div className="ux-logout-preview"><span className="ux-tag">Демо-аккаунт · Студент</span><p style={{marginTop:9}}>Избранное · Личные настройки · История сохранений</p></div>
      {step === 'confirm' ? <Buttons><button type="button" className="ux-btn ux-btn-danger" onClick={() => setStep('guest')}>Да, выйти</button><Secondary onClick={() => setStep('account')}>Остаться в аккаунте</Secondary></Buttons> : <Buttons><Primary onClick={() => setStep('confirm')}>Выйти из аккаунта</Primary></Buttons>}
      {step === 'confirm' && <p className="ux-inline-note">Настоящий выход должен завершать сессию на сервере. Этот макет изменяет только локальное состояние экрана.</p>}
    </>}
  </Stage>;
}

export function ScenarioScreen({ id }: { id: ScenarioId }) {
  switch (id) {
    case 'consent-favorites': return <ConsentScene kind="favorites" />;
    case 'consent-publication': return <ConsentScene kind="publication" />;
    case 'form-error': return <FormErrorScene />;
    case 'network-offline': return <ErrorScene type="offline" />;
    case 'server-unavailable': return <ErrorScene type="server" />;
    case 'empty-favorites': return <EmptyScene kind="favorites" />;
    case 'empty-events': return <EmptyScene kind="events" />;
    case 'empty-moderation': return <EmptyScene kind="moderation" />;
    case 'sso-unavailable': return <SsoScene />;
    case 'appointment-unavailable': return <AppointmentScene />;
    case 'contact-expired': return <ExpiredContactScene />;
    case 'logout': return <LogoutScene />;
  }
}
