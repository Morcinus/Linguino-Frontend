import { IFillInTableExercise } from "./FillInTableExercise";

const base: IFillInTableExercise = {
  exercise: {
    id: "sfdajnlsnfads",
    isNew: false,
    lessonItemId: "qneOTSjAgXyMeLZEnSzG",
    type: "FILL_TABLE",
    questionL2: "Complete the conjugation of the verb 'to be'",
    tableRows: [
      ["I", "am"],
      ["you", "are"],
      ["he/she/it", "is"],
    ],
    blankCellCoords: [
      [1, 0],
      [1, 2],
    ],
  },
};

export const mockFillInTableExerciseProps = {
  base,
};
