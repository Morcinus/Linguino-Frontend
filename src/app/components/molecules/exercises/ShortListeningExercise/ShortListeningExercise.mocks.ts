import { IShortListeningExercise } from "./ShortListeningExercise";

const base: IShortListeningExercise = {
  exercise: {
    id: "ifdsamlmlkafd",
    type: "SHORT_LISTENING",
    assignmentTitle: "Přeložte do angličtiny",

    questions: [
      {
        id: "asdndajdlad",
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

export const mockShortListeningExerciseProps = {
  base,
};
