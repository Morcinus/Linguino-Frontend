import { IFillInSentenceExercise } from "./FillInSentenceExercise";

const base: IFillInSentenceExercise = {
  exercise: {
    id: "asfjnldsfnks",
    isNew: false,
    lessonItemId: "qneOTSjAgXyMeLZEnSzG",
    type: "FillInSentenceExercise",
    textL1: "Mám rád jablka.",
    textL2: "I like apples .",
    blankIndexes: [2],
    options: ["apples", "pears", "lemons"],
    imageUrl: "https://picsum.photos/id/168/512/512",
  },
};

export const mockFillInSentenceExerciseProps = {
  base,
};
