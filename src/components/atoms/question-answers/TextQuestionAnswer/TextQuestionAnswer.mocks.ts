import { ITextQuestionAnswer } from "./TextQuestionAnswer";

const base: ITextQuestionAnswer = {
  questionAnswer: {
    answer: "xxx",
    id: "abc",
    question: "Lorem ipsum?",
    type: "TextExercise",
    lessonItemId: "abc",
  },
};

export const mockTextQuestionAnswerProps = {
  base,
};
