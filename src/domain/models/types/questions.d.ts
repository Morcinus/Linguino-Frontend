export interface QuestionAttempt {
  questionId: ID;
  isCorrect: boolean;
}

export interface Question {
  id: ID;
  question: string;
  answer: string;
  questionAudioLink: string;
  answerAudioLink: string;
  blankIndexes: Array<number>;
}

type FillInBlankQuestion = {
  id: ID;
  question: string;
  blankIndexes: Array<number>;
};
