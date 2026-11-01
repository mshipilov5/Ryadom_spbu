import type { PracticeKind } from '@/modules/practices/model/types';

export const practiceKindLabels: Record<PracticeKind, string> = {
  breathing: 'Дыхание',
  grounding: 'Заземление',
  stress: 'Стресс',
  mindfulness: 'Осознанность',
  checklist: 'Чек-лист',
};

export const practiceKindDescriptions: Record<PracticeKind, string> = {
  breathing: 'Спокойные упражнения без сложных задержек дыхания.',
  grounding: 'Возврат внимания к телу и окружающей обстановке.',
  stress: 'Короткие действия, которые помогают структурировать ближайшие минуты.',
  mindfulness: 'Наблюдение за текущим моментом без требования что-либо исправить.',
  checklist: 'Небольшие списки, которые помогают не держать всё в голове.',
};
