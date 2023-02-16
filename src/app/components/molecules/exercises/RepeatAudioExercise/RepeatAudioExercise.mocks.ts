import { IRepeatAudioExercise } from "./RepeatAudioExercise";

const base: IRepeatAudioExercise = {
  exercise: {
    id: "ifdsamlmlkafd",
    type: "REPEAT_AUDIO",
    assignmentTitle: "Listen and write what you hear!",
    audioURL:
      "https://www.chosic.com/wp-content/uploads/2021/02/Monkeys-Spinning-Monkeys.mp3",
    question: {
      id: "asdndajdladb",
      type: "AUDIO",
      answer: "Karel",
      question: "",
    },
  },
};

export const mockRepeatAudioExerciseProps = {
  base,
};
