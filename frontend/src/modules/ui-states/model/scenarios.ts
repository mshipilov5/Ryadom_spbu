export type ScenarioCategory = 'Согласия' | 'Ошибки' | 'Пустые списки' | 'Недоступность' | 'Кризисные контакты' | 'Выход';
export type ScenarioId =
  | 'consent-favorites'
  | 'consent-publication'
  | 'form-error'
  | 'network-offline'
  | 'server-unavailable'
  | 'empty-favorites'
  | 'empty-events'
  | 'empty-moderation'
  | 'sso-unavailable'
  | 'appointment-unavailable'
  | 'contact-expired'
  | 'logout';

export type ScenarioMeta = { id: ScenarioId; category: ScenarioCategory; title: string; summary: string; status: string; };

export const scenarios: ScenarioMeta[] = [
  { id: 'consent-favorites', category: 'Согласия', title: 'Согласие на избранное', summary: 'Разрешить сохранение или продолжить без него', status: 'Диалог' },
  { id: 'consent-publication', category: 'Согласия', title: 'Согласие на публикацию', summary: 'Условия публичного размещения текста', status: 'Диалог' },
  { id: 'form-error', category: 'Ошибки', title: 'Ошибка заполнения формы', summary: 'Подсказки рядом с полями, данные сохранены', status: 'Валидация' },
  { id: 'network-offline', category: 'Ошибки', title: 'Нет интернета', summary: 'Сохраняем ввод, предлагаем попробовать ещё раз', status: 'Нет сети' },
  { id: 'server-unavailable', category: 'Ошибки', title: 'Сервис временно недоступен', summary: 'Понятное объяснение без технических кодов', status: 'Ошибка' },
  { id: 'empty-favorites', category: 'Пустые списки', title: 'Избранное пусто', summary: 'Предлагаем перейти к открытым материалам', status: 'Пусто' },
  { id: 'empty-events', category: 'Пустые списки', title: 'Нет мероприятий по фильтру', summary: 'Можно сбросить фильтры', status: 'Пусто' },
  { id: 'empty-moderation', category: 'Пустые списки', title: 'Очередь модерации пуста', summary: 'Нейтральное сообщение для модератора', status: 'Пусто' },
  { id: 'sso-unavailable', category: 'Недоступность', title: 'Вход через СПбГУ не отвечает', summary: 'Гостевые разделы по-прежнему доступны', status: 'SSO' },
  { id: 'appointment-unavailable', category: 'Недоступность', title: 'Нет ответа системы записи', summary: 'Переход к действующей форме СПбГУ', status: 'API' },
  { id: 'contact-expired', category: 'Кризисные контакты', title: 'Контакт не прошёл проверку', summary: 'Публичный и административный вид', status: 'Безопасность' },
  { id: 'logout', category: 'Выход', title: 'Выход из аккаунта', summary: 'Подтверждение и дальнейший гостевой доступ', status: 'Сессия' },
];

export const scenarioGroups: ScenarioCategory[] = ['Согласия', 'Ошибки', 'Пустые списки', 'Недоступность', 'Кризисные контакты', 'Выход'];
export function isScenarioId(value: string): value is ScenarioId { return scenarios.some(s => s.id === value); }
