import { IFillTheBlank } from "./FillTheBlank";

const base: IFillTheBlank = {
  questionAnswer: {
    answer: "Lorem ipsum dolor sit amet.",
    blankIndexes: [1],
    id: "12345",
    question: "Lorem ipsum?",
    type: "FILL_IN_BLANK",
  },
};

export const mockFillTheBlankProps = {
  base,
};
