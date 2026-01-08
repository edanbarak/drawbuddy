
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Step {
  id: string;
  instruction: string;
  guideImage: string;
}

export interface Lesson {
  id: string;
  title: string;
  icon: string;
  difficulty: Difficulty;
  steps: Step[];
}
