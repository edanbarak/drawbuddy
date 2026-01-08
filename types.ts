
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Step {
  id: string;
  instruction: string;
  guideImage: string;
}

export interface Lesson {
  id: string;
  steps: Step[];
}

export interface DrawingSubject {
  id: string;
  title: string;
  icon: string;
  versions: Record<Difficulty, Lesson>;
}
