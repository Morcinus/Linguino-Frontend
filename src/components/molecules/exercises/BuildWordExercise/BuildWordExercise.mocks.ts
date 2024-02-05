import { IBuildWordExercise } from "./BuildWordExercise";

const base: IBuildWordExercise = {
  exercise: {
    id: "vxcvavHpCn",
    type: "BUILD_WORD",
    wordL1: "jablko",
    wordL2: "apple",
    letters: ["a", "p", "p", "l", "e", "x", "y", "z"],
    imageURL: "https://picsum.photos/id/168/512/512",
    answerAudioURL:
      "https://www.chosic.com/wp-content/uploads/2021/02/Monkeys-Spinning-Monkeys.mp3",
  },
};

export const mockBuildWordExerciseProps = {
  base,
};
