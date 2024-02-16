import { IListeningExercise } from "./ListeningExercise";

const base: IListeningExercise = {
  exercise: {
    id: "ifdsamlmlkafd",
    type: "LISTENING",
    questionL2: "What color was the T-shirt?",
    answerL2: "blue",
    audioURL: "https://mocks.linguino.org/audio-long.mp3",
    imageURL: "https://picsum.photos/id/168/512/512",
  },
};

export const mockListeningExerciseProps = {
  base,
};
