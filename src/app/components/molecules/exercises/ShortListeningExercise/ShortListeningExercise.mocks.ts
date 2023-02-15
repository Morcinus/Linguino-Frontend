import { IShortListeningExercise } from "./ShortListeningExercise";

const base: IShortListeningExercise = {
  exercise: {
    id: "ifdsamlmlkafd",
    type: "SHORT_LISTENING",
    assignmentTitle: "Listen and write what you hear!",
    audioURL:
      "https://www.chosic.com/wp-content/uploads/2021/02/Monkeys-Spinning-Monkeys.mp3",
    question: {
      id: "asdndajdladb",
      type: "TEXT",
      answer: "xxx",
      question: "",
    },
  },
  onContinue: (attempts, reschedule) => {
    console.log("onContinue", attempts, reschedule);
  },
};

export const mockShortListeningExerciseProps = {
  base,
};
