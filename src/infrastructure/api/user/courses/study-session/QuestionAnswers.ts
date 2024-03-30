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

export interface FillInBlankQuestionAnswer {
  type: "FILL_IN_BLANK";
  id: Id;
  question: string;
  answer: string;
  blankIndexes: Array<number>;
}

export interface TextQuestionAnswer {
  type: "TEXT";
  id: Id;
  question: string;
  answer: string;
  answerAudioURL?: string;
}

export interface AudioQuestionAnswer {
  type: "AUDIO";
  id: Id;
  question?: string;
  answer: string;
}

export interface BuildWordQuestionAnswer {
  type: "BUILD_WORD";
  id: Id;
  question: string;
  answer: string;
  letters: Array<string>;
}

export interface TableQuestionAnswer {
  type: "TABLE";
  id: Id;
  question: string;
  tableRows: Array<Array<string>>;
  blankCellCoords: Array<Array<number>>;
}

export interface MatchingQuestionAnswer {
  type: "MATCHING";
  id: Id;

  options1: Array<MatchOption>;
  options2: Array<MatchOption>;
}

export type MatchOption = MatchTextOption | MatchAudioOption | MatchImageOption;

export interface MatchTextOption {
  text: string;
  matchIndex?: number;
}

export interface MatchAudioOption {
  audioURL: string;
  matchIndex?: number;
}

export interface MatchImageOption {
  imageURL: string;
  matchIndex?: number;
}
