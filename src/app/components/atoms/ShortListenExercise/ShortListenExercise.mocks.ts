import { IShortListenExercise } from "./ShortListenExercise";

const base: IShortListenExercise = {
  exercise: {
    id: "ifdsamlmlkafd",
    type: "LONG_TEXT",

    instructionTitle: "Přepište poslech",
    instructionDescription: "Použijte minulý čas prostý",

    questions: [
      {
        question: "xxx",
        answer: "xxx",
      },
    ],

    explanation: "# Hello world \n ldsfjafld jdlafjafdjsl",

    audioLink: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
  },
  onContinue: () => {
    console.log("onContinue");
  },
  onWrong: () => {
    console.log("onWrong");
  },
};

export const mockShortListenExerciseProps = {
  base,
};
