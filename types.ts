
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type LanguageCode = 'en' | 'he' | 'es' | 'ar' | 'zh' | 'hi' | 'fr' | 'de' | 'ja';

export interface Step {
  id: string;
  instructionKey: string; // Using keys for translations
  guideImage: string;
}

export interface Lesson {
  id: string;
  steps: Step[];
}

export interface DrawingSubject {
  id: string;
  titleKey: string;
  icon: string;
  versions: Record<Difficulty, Lesson>;
}
