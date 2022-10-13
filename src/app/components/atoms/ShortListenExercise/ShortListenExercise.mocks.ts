import { IShortListenExercise } from "./ShortListenExercise";

const base: IShortListenExercise = {
  exercise: {
    id: "ifdsamlmlkafd",
    type: "LISTEN_AND_WRITE",

    instructionTitle: "Přepište poslech",

    questions: [
      {
        id: "lafjdflfa",
        answer: "xxx",
        questionAudioLink:
          "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
      },
    ],
  },
  onContinue: () => {
    console.log("onContinue");
  },
};

export const mockShortListenExerciseProps = {
  base,
};
