import { IRepeatAudioExercise } from "./RepeatAudioExercise";

const base: IRepeatAudioExercise = {
  exercise: {
    id: "ifdsamlmlkafd",
    lessonItemId: "asljfnvkduexi",
    type: "REPEAT_AUDIO",
    assignmentTitle: "Listen and repeat the sentence!",
    audioURL:
      "https://www.chosic.com/wp-content/uploads/2021/02/Monkeys-Spinning-Monkeys.mp3",
    question: {
      id: "asdndajdladb",
      type: "AUDIO",
      answer: "Karel snědl bramboru",
      question: "",
    },
  },
};

export const mockRepeatAudioExerciseProps = {
  base,
};
