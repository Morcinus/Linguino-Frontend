import {
  NewGrammar,
  NewVocabulary,
} from "infrastructure/api/users/exercises/Exercises";

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
  | ReadAloudExercise
  | NewVocabulary
  | NewGrammar
  | BuildWordExercise
  | FillInTableExercise;

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
  lessonItemId: ID;
  type: "LISTENING";
  assignmentTitle: string;
  audioURL: string;
  imageURL: string;

  questions: Array<FillInBlankQuestionAnswer | TextQuestionAnswer>;
}

export interface ShortListeningExercise {
  id: ID;
  lessonItemId: ID;
  type: "SHORT_LISTENING";
  assignmentTitle: string;
  audioURL: string;
  imageURL?: string;
  question: TextQuestionAnswer;
}

export interface RepeatAudioExercise {
  id: ID;
  lessonItemId: ID;
  type: "REPEAT_AUDIO";
  assignmentTitle: string;
  audioURL: string;
  imageURL?: string;
  question: AudioQuestionAnswer;
}

export interface ReadAloudExercise {
  id: ID;
  lessonItemId: ID;
  type: "READ_ALOUD";
  assignmentTitle: string;
  audioURL: string;
  imageURL?: string;
  question: AudioQuestionAnswer;
}

export interface SpeechExercise {
  id: ID;
  lessonItemId: ID;
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
  lessonItemId: ID;
  type: "TEXT";
  assignmentTitle: string;
  explanation?: string;
  imageURL?: string;

  question: TextQuestionAnswer;
}

export interface ReadingExercise {
  id: ID;
  lessonItemId: ID;
  type: "READING";
  assignmentTitle: string;
  imageURL: string;
  article: string;

  questions: Array<FillInBlankQuestionAnswer | TextQuestionAnswer>;
}

export interface BuildWordExercise {
  id: ID;
  lessonItemId: ID;
  type: "BUILD_WORD";
  assignmentTitle: string;
  imageURL?: string;

  question: BuildWordQuestionAnswer;
}

export interface FillInTableExercise {
  id: ID;
  lessonItemId: ID;
  type: "FILL_TABLE";
  assignmentTitle: string;

  question: TableQuestionAnswer;
}

export type AnswerState = "NONE" | "RIGHT" | "WRONG";
