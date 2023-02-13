import { IListeningExercise } from "./ListeningExercise";

export const base: IListeningExercise = {
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
        type: "FILL_IN_BLANK",
        blankIndexes: [3],
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        question: "Lorem ipsum?",
      },
      {
        id: "asdndajdladc",
        type: "FILL_IN_BLANK",
        blankIndexes: [5],
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        question: "Lorem ipsum?",
      },
    ],
  },
  onContinue: () => {
    console.log("onContinue");
  },
};

export const mockListeningExerciseProps = {
  base,
};
