import { IFillInSentenceExercise } from "./FillInSentenceExercise";

const base: IFillInSentenceExercise = {
  exercise: {
    id: "asfjnldsfnks",
    type: "FILL_IN_SENTENCE",
    textL1: "Mám rád jablka.",
    textL2: "I like apples .",
    blankIndexes: [2],
    options: ["apples", "pears", "lemons"],
    imageURL: "https://picsum.photos/id/168/512/512",
  },
};

export const mockFillInSentenceExerciseProps = {
  base,
};
