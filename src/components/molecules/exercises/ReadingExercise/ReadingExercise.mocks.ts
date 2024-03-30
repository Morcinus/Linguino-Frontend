import { IReadingExercise } from "./ReadingExercise";

const base: IReadingExercise = {
  exercise: {
    id: "ifdsamlmlkafd",
    isNew: false,
    lessonItemId: "qneOTSjAgXyMeLZEnSzG",
    type: "READING",
    article:
      "#### Hello world \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis lacus eu tortor venenatis, quis vestibulum nisi fringilla. Ut elit est, lacinia sed interdum vel, facilisis ac magna. Sed rutrum scelerisque neque, quis luctus purus convallis eu. Donec vehicula mi quis ante volutpat egestas. Proin et risus ac sem congue posuere. Mauris rutrum lobortis augue at malesuada. Nunc quis lorem nec nulla faucibus sagittis. Quisque nec aliquam sapien. Sed imperdiet semper lectus, interdum hendrerit diam aliquam pharetra.",
    questionL2: "What color was the T-shirt?",
    answerL2: "blue",
    imageUrl: "https://picsum.photos/id/168/512/512",
  },
};

export const mockReadingExerciseProps = {
  base,
};
