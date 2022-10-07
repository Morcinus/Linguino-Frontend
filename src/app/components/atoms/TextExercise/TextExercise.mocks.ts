import { ITextExercise } from "./TextExercise";

const long: ITextExercise = {
  variant: "long",
  exercise: {
    id: "ifdsamlmlkafd",
    type: "LONG_TEXT",

    instructionTitle: "Přeložte do angličtiny",
    instructionDescription: "Použijte minulý čas prostý",

    questions: [
      {
        question: "xxx",
        answer: "xxx",
      },
    ],

    explanation: "# Hello world \n ldsfjafld jdlafjafdjsl",
  },
  onContinue: () => {
    console.log("onContinue");
  },
  onWrong: () => {
    console.log("onWrong");
  },
};

const short: ITextExercise = {
  variant: "short",
  exercise: {
    id: "ifdsamlmlkafd",
    type: "LONG_TEXT",

    instructionTitle: "Přeložte do angličtiny",
    instructionDescription: "Použijte minulý čas prostý",

    questions: [
      {
        question: "xxx",
        answer: "xxx",
      },
    ],

    explanation: "# Hello world \n ldsfjafld jdlafjafdjsl",
  },
  onContinue: () => {
    console.log("onContinue");
  },
  onWrong: () => {
    console.log("onWrong");
  },
};

const fillInTheBlank: ITextExercise = {
  variant: "fillInTheBlank",
  exercise: {
    id: "ifdsamlmlkafd",
    type: "LONG_TEXT",

    instructionTitle: "Přeložte do angličtiny",
    instructionDescription: "Použijte minulý čas prostý",

    questions: [
      {
        question: "xxx",
        answer: "xxx",
      },
    ],

    explanation: "# Hello world \n ldsfjafld jdlafjafdjsl",
  },
  onContinue: () => {
    console.log("onContinue");
  },
  onWrong: () => {
    console.log("onWrong");
  },
};

export const mockTextExerciseProps = {
  long,
  short,
  fillInTheBlank,
};
