import { IRapidQuestionExercise } from "./RapidQuestionExercise";

const base: IRapidQuestionExercise = {
  exercise: {
    id: "ifdsamlmlkafd",
    type: "RAPID_QUESTIONS",
    instructionTitle: "Odpovězte nahlas v angličtině",
    questions: [
      {
        id: "ldsnjdadd",
        questionAudioLink:
          "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
      },
    ],
  },
  onContinue: () => {
    console.log("onContinue");
  },
};

export const mockRapidQuestionExerciseProps = {
  base,
};
