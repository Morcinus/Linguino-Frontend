export type ExerciseType =
  | "SHORT_TEXT"
  | "LONG_TEXT"
  | "FILL_IN_BLANK"
  | "LISTEN_AND_WRITE"
  | "LISTEN_AND_SPEAK"
  | "SPEECH"
  | "RAPID_QUESTIONS"
  | "READING_WITH_QUESTIONS"
  | "LISTENING_WITH_QUESTIONS";

export interface Question {
  question: string;
  answer?: string;
}

export interface Exercise {
  id: ID;
  type: ExerciseType;

  instructionTitle: string;
  instructionDescription?: string;

  questions?: Array<Question>;

  explanation?: string;
}

export interface IExerciseComponent {
  exercise: Exercise;
  onWrong: () => void;
  onContinue: () => void;
}

export interface ExerciseProgress {
  exerciseId: ID;
  attempts: number;
}

export interface ListeningExercise extends Exercise {
  audioLink: string;
  questions: Array<Question>;
}

export interface SpeakingExercise extends Exercise {
  time: number;
  questions: Array<Question>;
}

export interface RapidQuestionExercise extends Exercise {
  audioLink: string;
}

export interface TextExercise extends Exercise {
  questions: Array<Question>;
}
