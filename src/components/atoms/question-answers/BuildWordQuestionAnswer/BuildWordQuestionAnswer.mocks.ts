import { IBuildWordQuestionAnswer } from "./BuildWordQuestionAnswer";

const base: IBuildWordQuestionAnswer = {
  questionAnswer: {
    answer: "apple",
    id: "afdnlksjff",
    letters: ["a", "x", "p", "l", "y", "e", "p", "z"],
    question: "jablko",
    type: "BuildWordExercise",
    lessonItemId: "abc",
  },
};

export const mockBuildWordQuestionAnswerProps = {
  base,
};
