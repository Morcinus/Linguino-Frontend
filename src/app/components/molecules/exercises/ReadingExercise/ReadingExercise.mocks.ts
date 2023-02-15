import { IReadingExercise } from "./ReadingExercise";

const base: IReadingExercise = {
  exercise: {
    id: "ifdsamlmlkafd",
    type: "READING",
    assignmentTitle: "Read the article and answer the questions!",
    imageURL: "https://picsum.photos/id/168/512/512",
    article:
      "#### Hello world \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis lacus eu tortor venenatis, quis vestibulum nisi fringilla. Ut elit est, lacinia sed interdum vel, facilisis ac magna. Sed rutrum scelerisque neque, quis luctus purus convallis eu. Donec vehicula mi quis ante volutpat egestas. Proin et risus ac sem congue posuere. Mauris rutrum lobortis augue at malesuada. Nunc quis lorem nec nulla faucibus sagittis. Quisque nec aliquam sapien. Sed imperdiet semper lectus, interdum hendrerit diam aliquam pharetra.",
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
};

export const mockReadingExerciseProps = {
  base,
};
