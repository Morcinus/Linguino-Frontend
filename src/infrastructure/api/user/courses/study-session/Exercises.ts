import { LessonType } from "../lessons/Lessons";
import { MatchOption, QuestionAnswer } from "./QuestionAnswers";
import { QuestionAttempt, UserAnswer } from "./QuestionAttempt";

export type Exercise =
  | TextExercise
  | ListeningExercise
  | SpeechExercise
  | ShortListeningExercise
  | ReadingExercise
  | RepeatAudioExercise
  | ReadAloudExercise
  | BuildWordExercise
  | FillInTableExercise
  | FillInSentenceExercise
  | MatchingExercise;

export interface IExerciseComponent {
  exercise: Exercise;
  onContinue?: (attempts: Array<QuestionAttempt>, reschedule: boolean) => void;
}

interface IExercise {
  id: Id;
  type: string;
  isNew: boolean;
  lessonItemId: Id;
  lessonId?: Id;
  lessonItemType?: LessonType;
}

export interface IQuestionAnswerComponent {
  questionAnswer: QuestionAnswer;
  onChange?: (userAnswer: UserAnswer) => void;
  answerStates?: Array<AnswerState>;
  displayAnswers?: boolean;
}

export interface ListeningExercise extends IExercise {
  type: "ListeningExercise";
  audioUrl: string;
  imageUrl?: string;
  questionL2: string;
  answerL2: string;
}

export interface ShortListeningExercise extends IExercise {
  type: "ShortListeningExercise";
  textL2: string;
  textL2AudioUrl: string;
}

export interface RepeatAudioExercise extends IExercise {
  type: "RepeatAudioExercise";
  textL2: string;
  audioUrl: string;
}

export interface ReadAloudExercise extends IExercise {
  type: "ReadAloudExercise";
  textL2: string;
  imageUrl?: string;
}

export interface SpeechExercise extends IExercise {
  type: "SpeechExercise";
  assignmentTopicL2: string;
  timeMs: number;
  questionsL2: Array<string>;
}

export interface TextExercise extends IExercise {
  type: "TextExercise";
  textL1: string;
  textL2: string;
  imageUrl?: string;
  textL2AudioUrl?: string;
  explanation?: string;
}

export interface ReadingExercise extends IExercise {
  type: "ReadingExercise";
  article: string;
  questionL2: string;
  answerL2: string;
  imageUrl?: string;
}

export interface BuildWordExercise extends IExercise {
  type: "BuildWordExercise";
  wordL1: string;
  wordL2: string;
  letters: Array<string>;
  imageUrl?: string;
  answerAudioUrl?: string;
}

export interface FillInTableExercise extends IExercise {
  type: "FillInTableExercise";
  questionL2: string;
  tableRows: Array<Array<string>>;
  blankCellCoords: Array<Array<number>>;
}

export interface FillInSentenceExercise extends IExercise {
  type: "FillInSentenceExercise";

  textL1: string;
  textL2: string;
  blankIndexes: Array<number>;
  options: Array<string>;

  imageUrl?: string;
}

export interface MatchingExercise extends IExercise {
  type: "MatchingExercise";

  options1: Array<MatchOption>;
  options2: Array<MatchOption>;
}

export type AnswerState = "NONE" | "RIGHT" | "WRONG";
