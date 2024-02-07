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
  | NewVocabulary
  | NewGrammar
  | BuildWordExercise
  | FillInTableExercise
  | FillInSentenceExercise
  | MatchingExercise;

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
  audioURL: string;
  imageURL?: string;
  questionL2: string;
  answerL2: string;
}

export interface ShortListeningExercise {
  id: ID;
  type: "SHORT_LISTENING";
  textL2: string;
  textL2AudioURL: string;
}

export interface RepeatAudioExercise {
  id: ID;
  type: "REPEAT_AUDIO";
  textL2: string;
  audioURL: string;
}

export interface ReadAloudExercise {
  id: ID;
  type: "READ_ALOUD";
  textL2: string;
  imageURL?: string;
}

export interface SpeechExercise {
  id: ID;
  type: "SPEECH";
  assignmentTopicL2: string;
  timeMs: number;
  questionsL2: Array<string>;
}

export interface TextExercise {
  id: ID;
  type: "TEXT";
  textL1: string;
  textL2: string;
  imageURL?: string;
  textL2AudioURL?: string;
  explanation?: string;
}

export interface ReadingExercise {
  id: ID;
  type: "READING";
  article: string;
  questionL2: string;
  answerL2: string;
  imageURL?: string;
}

export interface BuildWordExercise {
  id: ID;
  type: "BUILD_WORD";
  wordL1: string;
  wordL2: string;
  letters: Array<string>;
  imageURL?: string;
  answerAudioURL?: string;
}

export interface FillInTableExercise {
  id: ID;
  type: "FILL_TABLE";
  questionL2: string;
  tableRows: Array<Array<string>>;
  blankCellCoords: Array<Array<number>>;
}

export interface FillInSentenceExercise {
  id: ID;
  type: "FILL_IN_SENTENCE";

  textL1: string;
  textL2: string;
  blankIndexes: Array<number>;
  options: Array<string>;

  imageURL?: string;
}

export interface MatchingExercise {
  id: ID;
  type: "MATCHING";

  options1: Array<MatchOption>;
  options2: Array<MatchOption>;
}

export type AnswerState = "NONE" | "RIGHT" | "WRONG";

export interface NewVocabulary {
  lessonItemId: ID;
  type: "NEW_VOCABULARY";
}

export interface NewGrammar {
  lessonId: ID;
  type: "NEW_GRAMMAR";
}
