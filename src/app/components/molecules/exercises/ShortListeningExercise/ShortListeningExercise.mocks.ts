import { IShortListeningExercise } from "./ShortListeningExercise";

const base: IShortListeningExercise = {
  exercise: {
    id: "ifdsamlmlkafd",
    type: "SHORT_LISTENING",
    assignmentTitle: "Listen and answer questions!",
    audioURL:
      "https://www.chosic.com/wp-content/uploads/2021/02/Monkeys-Spinning-Monkeys.mp3",
    imageURL: "https://picsum.photos/id/168/512/512",
    question: {
      id: "asdndajdladb",
      type: "TEXT",
      answer: "xxx",
      question: "Lorem ipsum?",
    },
  },
  onContinue: (attempts, reschedule) => {
    console.log("onContinue", attempts, reschedule);
  },
};

export const mockShortListeningExerciseProps = {
  base,
};
