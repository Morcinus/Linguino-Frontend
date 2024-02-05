import {
  FillInBlankQuestionAnswer,
  QuestionAnswer,
  TextQuestionAnswer,
} from "../../../../domain/models/types/questionAnswers";
import { QuestionAttempt } from "../../../../domain/models/types/questionAttempts";

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
  type: "TEXT";
  textL1: string;
  textL2: string;
  imageURL?: string;
  textL2AudioURL?: string;
  explanation?: string;
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
  type: "BUILD_WORD";
  wordL1: string;
  wordL2: string;
  letters: Array<string>;
  imageURL?: string;
  answerAudioURL?: string;
}

export interface FillInTableExercise {
  id: ID;
  lessonItemId: ID;
  type: "FILL_TABLE";
  assignmentTitle: string;

  question: TableQuestionAnswer;
}

export interface FillInSentenceExercise {
  id: ID;
  lessonItemId: ID;
  type: "FILL_IN_SENTENCE";
  assignmentTitle: string;
  imageURL?: string;

  question: FillInBlankQuestionAnswer;
  options: Array<string>;
}

export interface MatchingExercise {
  id: ID;
  lessonItemId: ID;
  type: "MATCHING";
  assignmentTitle: string;

  question: MatchingQuestionAnswer;
}

export type AnswerState = "NONE" | "RIGHT" | "WRONG";

export interface NewVocabulary {
  lessonItemId: ID;
  type: "NEW_VOCABULARY";
}

export interface NewGrammar {
  lessonId: ID;
  lessonItemIds: Array<ID>;
  type: "NEW_GRAMMAR";
}
