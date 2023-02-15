import { IListeningExercise } from "./ListeningExercise";

const base: IListeningExercise = {
  exercise: {
    id: "ifdsamlmlkafd",
    type: "LISTENING",
    assignmentTitle: "Listen and answer questions!",
    audioURL:
      "https://www.chosic.com/wp-content/uploads/2021/02/Monkeys-Spinning-Monkeys.mp3",
    imageURL: "https://picsum.photos/id/168/512/512",
    questions: [
      {
        id: "asdndajdlada",
        type: "FILL_IN_BLANK",
        blankIndexes: [0, 1],
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        question: "Lorem ipsum?",
      },
      {
        id: "asdndajdladb",
        type: "TEXT",
        answer: "xxx",
        question: "Lorem ipsum?",
      },
      {
        id: "asdndajdladc",
        type: "FILL_IN_BLANK",
        blankIndexes: [2, 5],
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        question: "Lorem ipsum?",
      },
    ],
  },
  onContinue: (attempts, reschedule) => {
    console.log("onContinue", attempts, reschedule);
  },
};

export const mockListeningExerciseProps = {
  base,
};
