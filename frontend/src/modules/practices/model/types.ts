export type PracticeKind =
  | 'breathing'
  | 'grounding'
  | 'stress'
  | 'mindfulness'
  | 'checklist';

export type Practice = {
  slug: string;
  kind: PracticeKind;
  title: string;
  summary: string;
  durationMinutes: number;
  tags: string[];
  steps: string[];
  boundaries: string[];
};
