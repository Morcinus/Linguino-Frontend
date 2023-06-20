import { IReadAloudExercise } from "./ReadAloudExercise";

const base: IReadAloudExercise = {
  exercise: {
    id: "ifdsamlmlkafd",
    lessonItemId: "asljfnvkduexi",
    type: "READ_ALOUD",
    assignmentTitle: "Read the sentence aloud!",
    imageURL: "https://picsum.photos/id/168/512/512",
    audioURL:
      "https://www.chosic.com/wp-content/uploads/2021/02/Monkeys-Spinning-Monkeys.mp3",
    question: {
      id: "asdndajdladb",
      type: "AUDIO",
      answer: "Karel snědl bramboru",
      question: "Karel snědl bramboru",
    },
  },
};

export const mockReadAloudExerciseProps = {
  base,
};
