import { IFillInTableExercise } from "./FillInTableExercise";

const base: IFillInTableExercise = {
  exercise: {
    id: "sfdajnlsnfads",
    lessonItemId: "fsjngskdnlkngs",
    type: "FILL_TABLE",
    assignmentTitle: "Doplňte chybějící slova do tabulky!",

    question: {
      id: "flsnajkadfnldfasj",
      question: "Vyčasujte správně sloveso být",
      type: "TABLE",
      tableRows: [
        ["I", "am"],
        ["You", "are"],
        ["He/she/it", "is"],
        ["We", "are"],
        ["You", "are"],
        ["They", "are"],
      ],
      blankCellCoords: [
        [1, 0],
        [1, 2],
        [1, 4],
      ],
    },
  },
};

export const mockFillInTableExerciseProps = {
  base,
};
