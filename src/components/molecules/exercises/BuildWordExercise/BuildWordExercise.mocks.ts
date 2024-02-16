import { IBuildWordExercise } from "./BuildWordExercise";

const base: IBuildWordExercise = {
  exercise: {
    id: "vxcvavHpCn",
    type: "BUILD_WORD",
    wordL1: "jablko",
    wordL2: "apple",
    letters: ["a", "p", "p", "l", "e", "x", "y", "z"],
    imageURL: "https://picsum.photos/id/168/512/512",
    answerAudioURL: "https://mocks.linguino.org/audio-short.mp3",
  },
};

export const mockBuildWordExerciseProps = {
  base,
};
