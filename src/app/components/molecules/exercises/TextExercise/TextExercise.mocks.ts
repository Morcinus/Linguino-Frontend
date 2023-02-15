import { ITextExercise } from "./TextExercise";

const base: ITextExercise = {
  exercise: {
    id: "ifdsamlmlkafd",
    type: "TEXT",
    assignmentTitle: "Listen and answer questions!",
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

export const mockTextExerciseProps = {
  base,
};
