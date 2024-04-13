import { ITableQuestionAnswer } from "./TableQuestionAnswer";

const base: ITableQuestionAnswer = {
  questionAnswer: {
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
};

export const mockTableQuestionAnswerProps = {
  base,
};
