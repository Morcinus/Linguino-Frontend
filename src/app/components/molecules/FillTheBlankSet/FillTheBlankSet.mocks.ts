import { IFillTheBlankSet } from "./FillTheBlankSet";

const base: IFillTheBlankSet = {
  questions: [
    {
      question: "Hello world, I love tomatoes!",
      blankIndexes: [0, 1, 2],
      id: "a",
    },
    { question: "Hello world, I love tomatoes!", blankIndexes: [2], id: "b" },
    { question: "Hello world, I love tomatoes!", blankIndexes: [1], id: "c" },
    { question: "Hello world, I love tomatoes!", blankIndexes: [4], id: "d" },
    { question: "Hello world, I love tomatoes!", blankIndexes: [2], id: "e" },
  ],
  onContinue: () => {
    console.log("onContinue");
  },
};

export const mockFillTheBlankSetProps = {
  base,
};
