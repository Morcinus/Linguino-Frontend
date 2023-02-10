export type Exercise =
  | TextExercise
  | ListeningExercise
  | RapidQuestionExercise
  | SpeechExercise
  | ShortListeningExercise;

export interface IExerciseComponent {
  exercise: Exercise;
  onContinue: (attempts: Array<QuestionAttempt>, reschedule: boolean) => void;
}

export interface ListeningExercise {
  id: ID;
  type: "LISTENING";
  instructionTitle: string;
  instructionDescription?: string;
  audioLink: string;

  questions: Array<{
    id: ID;
    question: string;
    blankIndexes: Array<number>;
  }>;
}

export interface ShortListeningExercise {
  id: ID;
  type: "LISTEN_AND_WRITE";
  instructionTitle: string;

  questions: Array<{
    id: ID;
    answer: string;
    questionAudioLink: string;
  }>;
}

export interface RapidQuestionExercise {
  id: ID;
  type: "RAPID_QUESTIONS";
  instructionTitle: string;

  questions: Array<{
    id: ID;
    questionAudioLink: string;
  }>;
}

export interface SpeechExercise {
  id: ID;
  type: "SPEECH";
  assignmentTitle: string;
  assignmentTopic: string;
  time: number;

  questions: Array<{
    id: ID;
    question: string;
  }>;
}

export interface TextExercise {
  id: ID;
  type: "LONG_TEXT" | "SHORT_TEXT";
  assignmentTitle: string;
  instructionDescription?: string;
  explanation: string;

  questions: Array<{
    id: ID;
    question: string;
    answer: string;
    answerAudioLink: string;
  }>;
}

export type AnswerState = "NONE" | "RIGHT" | "WRONG";
