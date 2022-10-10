import { ISpeechExercise } from "./SpeechExercise";

const base: ISpeechExercise = {
  exercise: {
    id: "ifdsamlmlkafd",
    type: "SPEECH",

    instructionTitle: "Mluvte na téma",
    instructionDescription: "What is my favourite music genre",

    time: 120000,

    questions: [
      {
        question: "Why do you like the genre?",
        answer: "",
      },
      {
        question: "What genres do you hate?",
        answer: "",
      },
      {
        question: "Would you want to play an instrument? Why? Why not?",
        answer: "",
      },
    ],
  },
  onContinue: () => {
    console.log("onContinue");
  },
  onWrong: () => {
    console.log("onWrong");
  },
};
export const mockSpeechExerciseProps = {
  base,
};
