export type QuestionAnswer =
  | FillInBlankQuestionAnswer
  | TextQuestionAnswer
  | AudioQuestionAnswer;

export interface Question {
  id: ID;
  question: string;
  answer: string;
  questionAudioLink: string;
  answerAudioLink: string;
  blankIndexes: Array<number>;
}

export interface FillInBlankQuestionAnswer {
  type: "FILL_IN_BLANK";
  id: ID;
  question: string;
  answer: string;
  blankIndexes: Array<number>;
}

export interface TextQuestionAnswer {
  type: "TEXT";
  id: ID;
  question: string;
  answer: string;
  answerAudioURL?: string;
}

export interface AudioQuestionAnswer {
  type: "AUDIO";
  id: ID;
  question?: string;
  answer: string;
}
