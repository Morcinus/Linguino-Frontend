import { IExerciseContainer } from "./ExerciseContainer";

const base: IExerciseContainer = {
  exercise: {
    id: "ifdsamlmlkafd",
    type: "LONG_TEXT",

    assignmentTitle: "Přeložte do angličtiny",
    instructionDescription: "Použijte minulý čas prostý",

    questions: [
      {
        id: "asdndajdlad",
        question: "xxx",
        answer: "xxx",
        answerAudioLink: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
      },
    ],

    explanation: "# Hello world \n ldsfjafld jdlafjafdjsl",
  },
  onContinue: () => {
    console.log("onContinue");
  },
};

export const mockExerciseContainerProps = {
  base,
};
