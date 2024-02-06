import { ISpeechExercise } from "./SpeechExercise";

const base: ISpeechExercise = {
  exercise: {
    id: "ifdsamlmlkafd",
    type: "SPEECH",
    assignmentTopicL2: "The best holiday of my life",
    questionsL2: [
      "What did you do?",
      "Where did you travel?",
      "Why was it the best holiday?",
    ],
    timeMs: 60000,
  },
};
export const mockSpeechExerciseProps = {
  base,
};
