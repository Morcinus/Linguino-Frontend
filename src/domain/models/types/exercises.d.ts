import { FillInBlankQuestionAnswer, QuestionAnswer } from "./questionAnswers";
import { QuestionAttempt } from "./questionAttempts";

export type Exercise =
  | TextExercise
  | ListeningExercise
  | SpeechExercise
  | ShortListeningExercise;

export interface IExerciseComponent {
  exercise: Exercise;
  onContinue: (attempts: Array<QuestionAttempt>, reschedule: boolean) => void;
}

export interface IQuestionAnswerComponent {
  questionAnswer: QuestionAnswer;
  onChange?: (userAnswer: UserAnswer) => void;
  answerStates?: Array<AnswerState>;
  displayAnswers?: boolean;
}

export interface ListeningExercise {
  id: ID;
  type: "LISTENING";
  assignmentTitle: string;
  audioURL: string;
  imageURL: string;

  questions: Array<FillInBlankQuestionAnswer | TextQuestionAnswer>;
}

export interface ShortListeningExercise {
  id: ID;
  type: "SHORT_LISTENING";
  assignmentTitle: string;
  audioURL: string;
  imageURL: string;
  question: TextQuestionAnswer;
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
