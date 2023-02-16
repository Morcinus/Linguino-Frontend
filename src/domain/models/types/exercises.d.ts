import {
  FillInBlankQuestionAnswer,
  QuestionAnswer,
  TextQuestionAnswer,
} from "./questionAnswers";
import { QuestionAttempt } from "./questionAttempts";

export type Exercise =
  | TextExercise
  | ListeningExercise
  | SpeechExercise
  | ShortListeningExercise
  | ReadingExercise
  | RepeatAudioExercise
  | ReadAloudExercise;

export interface IExerciseComponent {
  exercise: Exercise;
  onContinue?: (attempts: Array<QuestionAttempt>, reschedule: boolean) => void;
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
  imageURL?: string;
  question: TextQuestionAnswer;
}

export interface RepeatAudioExercise {
  id: ID;
  type: "REPEAT_AUDIO";
  assignmentTitle: string;
  audioURL: string;
  imageURL?: string;
  question: AudioQuestionAnswer;
}

export interface ReadAloudExercise {
  id: ID;
  type: "READ_ALOUD";
  assignmentTitle: string;
  audioURL: string;
  imageURL?: string;
  question: AudioQuestionAnswer;
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
  type: "TEXT";
  assignmentTitle: string;
  explanation?: string;
  imageURL?: string;

  question: TextQuestionAnswer;
}

export interface ReadingExercise {
  id: ID;
  type: "READING";
  assignmentTitle: string;
  imageURL: string;
  article: string;

  questions: Array<FillInBlankQuestionAnswer | TextQuestionAnswer>;
}

export type AnswerState = "NONE" | "RIGHT" | "WRONG";
