import { action } from "@storybook/addon-actions";

import FillTheBlank from "../FillTheBlank/FillTheBlank";
import { IExercise } from "./Exercise";

const base: IExercise = {
  assignmentTitle: "Lorem ipsum",
  onContinue: action("onContinue"),
  imageUrl: "https://picsum.photos/id/168/512/512",
  questionAnswers: [
    {
      id: "asdndajdlada",
      type: "FILL_IN_BLANK",
      blankIndexes: [0, 1],
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      question: "Lorem ipsum?",
      lessonItemId: "abc",
    },
    {
      id: "asdndajdladc",
      type: "FILL_IN_BLANK",
      blankIndexes: [2, 5],
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      question: "Lorem ipsum?",
      lessonItemId: "abcd",
    },
  ],
  questionAnswerComponents: [
    {
      component: FillTheBlank,
      props: {
        questionAnswer: {
          id: "asdndajdlada",
          type: "FILL_IN_BLANK",
          blankIndexes: [0, 1],
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          question: "Lorem ipsum?",
        },
      },
    },
    {
      component: FillTheBlank,
      props: {
        questionAnswer: {
          id: "asdndajdlada",
          type: "FILL_IN_BLANK",
          blankIndexes: [0, 1],
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          question: "Lorem ipsum?",
        },
      },
    },
  ],
};

export const mockExerciseProps = {
  base,
};
