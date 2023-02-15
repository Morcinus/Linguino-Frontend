import { ISpeechExercise } from "./SpeechExercise";

const base: ISpeechExercise = {
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
};
export const mockSpeechExerciseProps = {
  base,
};
