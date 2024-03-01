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
  id: ID;
  type: string;
  isNew: boolean;
  lessonItemId: ID;
  lessonId?: ID;
  lessonType?: LessonType;
}

export interface IQuestionAnswerComponent {
  questionAnswer: QuestionAnswer;
  onChange?: (userAnswer: UserAnswer) => void;
  answerStates?: Array<AnswerState>;
  displayAnswers?: boolean;
}

export interface ListeningExercise extends IExercise {
  type: "LISTENING";
  audioURL: string;
  imageURL?: string;
  questionL2: string;
  answerL2: string;
}

export interface ShortListeningExercise extends IExercise {
  type: "SHORT_LISTENING";
  textL2: string;
  textL2AudioURL: string;
}

export interface RepeatAudioExercise extends IExercise {
  type: "REPEAT_AUDIO";
  textL2: string;
  audioURL: string;
}

export interface ReadAloudExercise extends IExercise {
  type: "READ_ALOUD";
  textL2: string;
  imageURL?: string;
}

export interface SpeechExercise extends IExercise {
  type: "SPEECH";
  assignmentTopicL2: string;
  timeMs: number;
  questionsL2: Array<string>;
}

export interface TextExercise extends IExercise {
  type: "TEXT";
  textL1: string;
  textL2: string;
  imageURL?: string;
  textL2AudioURL?: string;
  explanation?: string;
}

export interface ReadingExercise extends IExercise {
  type: "READING";
  article: string;
  questionL2: string;
  answerL2: string;
  imageURL?: string;
}

export interface BuildWordExercise extends IExercise {
  type: "BUILD_WORD";
  wordL1: string;
  wordL2: string;
  letters: Array<string>;
  imageURL?: string;
  answerAudioURL?: string;
}

export interface FillInTableExercise extends IExercise {
  type: "FILL_TABLE";
  questionL2: string;
  tableRows: Array<Array<string>>;
  blankCellCoords: Array<Array<number>>;
}

export interface FillInSentenceExercise extends IExercise {
  type: "FILL_IN_SENTENCE";

  textL1: string;
  textL2: string;
  blankIndexes: Array<number>;
  options: Array<string>;

  imageURL?: string;
}

export interface MatchingExercise extends IExercise {
  type: "MATCHING";

  options1: Array<MatchOption>;
  options2: Array<MatchOption>;
}

export type AnswerState = "NONE" | "RIGHT" | "WRONG";
