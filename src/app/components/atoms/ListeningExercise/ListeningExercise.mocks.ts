import { IListeningExercise } from "./ListeningExercise";

const base: IListeningExercise = {
  exercise: {
    id: "ifdsamlmlkafd",
    type: "LISTENING",

    instructionTitle: "Přepište poslech",

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

    audioLink: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
  },
  onContinue: () => {
    console.log("onContinue");
  },
};

export const mockListeningExerciseProps = {
  base,
};
