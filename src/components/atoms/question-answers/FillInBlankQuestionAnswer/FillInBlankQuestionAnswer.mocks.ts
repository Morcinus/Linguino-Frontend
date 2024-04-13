import { IFillInBlankQuestionAnswer } from "./FillInBlankQuestionAnswer";

const base: IFillInBlankQuestionAnswer = {
  options: ["am", "angry", "hungry", "is", "are"],
  questionAnswer: {
    question: "Jsem velice hladový.",
    answer: "I am very hungry",
    blankIndexes: [1, 3],
    id: "asjnkfldaf",
    type: "FILL_IN_BLANK",
  },
};

export const mockFillInBlankQuestionAnswerProps = {
  base,
};
