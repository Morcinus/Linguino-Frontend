import { IFillInSentenceExercise } from "./FillInSentenceExercise";

const base: IFillInSentenceExercise = {
  exercise: {
    assignmentTitle: "Přelož následující větu!",
    id: "asfjnldsfnks",
    lessonItemId: "dflnjfnaksfandf",
    type: "FILL_IN_SENTENCE",
    options: ["am", "angry", "hungry", "is", "are"],
    question: {
      question: "Jsem velice hladový.",
      answer: "I am very hungry",
      blankIndexes: [1, 3],
      id: "asjnkfldaf",
      type: "FILL_IN_BLANK",
    },
  },
};

export const mockFillInSentenceExerciseProps = {
  base,
};
