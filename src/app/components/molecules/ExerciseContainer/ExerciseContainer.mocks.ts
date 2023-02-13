import { base as listeningExercise } from "../exercises/ListeningExercise/ListeningExercise.mocks";
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

const longTextExercise: IExerciseContainer = {
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

const shortTextExercise: IExerciseContainer = {
  exercise: {
    id: "ifdsamlmlkafd",
    type: "SHORT_TEXT",

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

const speechExercise: IExerciseContainer = {
  exercise: {
    id: "ifdsamlmlkafd",
    type: "SPEECH",

    assignmentTitle: "Mluvte na téma",
    assignmentTopic: "What is my favourite music genre",

    time: 120000,

    questions: [
      {
        question: "Why do you like the genre?",
        id: "dadadas",
      },
      {
        question: "What genres do you hate?",
        id: "qdwqd",
      },
      {
        question: "Would you want to play an instrument? Why? Why not?",
        id: "wdqqw",
      },
    ],
  },
  onContinue: () => {
    console.log("onContinue");
  },
};

const shortListeningExercise: IExerciseContainer = {
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

export const mockExerciseContainerProps = {
  base,
  longTextExercise,
  shortTextExercise,
  speechExercise,
  shortListeningExercise,
  listeningExercise,
};
