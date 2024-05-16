export type QuestionAnswer =
  | FillInBlankQuestionAnswer
  | TextQuestionAnswer
  | AudioQuestionAnswer
  | BuildWordQuestionAnswer
  | TableQuestionAnswer
  | MatchingQuestionAnswer;

export interface Question {
  id: Id;
  question: string;
  answer: string;
  questionAudioLink: string;
  answerAudioLink: string;
  blankIndexes: Array<number>;
}

interface IQuestionAnswer {
  id: Id;
  type: string;
  lessonItemId: Id;
}

export interface FillInBlankQuestionAnswer extends IQuestionAnswer {
  type: "FILL_IN_BLANK";
  question: string;
  answer: string;
  blankIndexes: Array<number>;
}

export interface TextQuestionAnswer extends IQuestionAnswer {
  type: "TextExercise";
  question: string;
  answer: string;
  answerAudioUrl?: string;
}

export interface AudioQuestionAnswer extends IQuestionAnswer {
  type: "AUDIO";
  question?: string;
  answer: string;
}

export interface BuildWordQuestionAnswer extends IQuestionAnswer {
  type: "BuildWordExercise";
  question: string;
  answer: string;
  letters: Array<string>;
}

export interface TableQuestionAnswer extends IQuestionAnswer {
  type: "TABLE";
  question: string;
  tableRows: Array<Array<string>>;
  blankCellCoords: Array<Array<number>>;
}

export interface MatchingQuestionAnswer extends IQuestionAnswer {
  type: "MatchingExercise";

  options1: Array<MatchOption>;
  options2: Array<MatchOption>;
}

export type MatchOption = MatchTextOption | MatchAudioOption | MatchImageOption;

export interface MatchTextOption {
  text: string;
  matchIndex?: number;
}

export interface MatchAudioOption {
  audioUrl: string;
  matchIndex?: number;
}

export interface MatchImageOption {
  imageUrl: string;
  matchIndex?: number;
}
