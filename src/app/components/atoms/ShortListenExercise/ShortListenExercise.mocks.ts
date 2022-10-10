import { IShortListenExercise } from "./ShortListenExercise";

const base: IShortListenExercise = {
  exercise: {
    id: "ifdsamlmlkafd",
    type: "LISTEN_AND_WRITE",

    instructionTitle: "Přepište poslech",

    questions: [
      {
        question: "",
        answer: "xxx",
      },
    ],

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
