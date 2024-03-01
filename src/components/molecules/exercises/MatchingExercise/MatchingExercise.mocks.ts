import { IMatchingExercise } from "./MatchingExercise";

const base: IMatchingExercise = {
  exercise: {
    id: "sfdajnlsnfads",
    isNew: false,
    lessonItemId: "qneOTSjAgXyMeLZEnSzG",
    type: "MATCHING",
    options1: [
      {
        imageURL: "https://picsum.photos/id/1/512/512",
        matchIndex: 0,
      },
      {
        imageURL: "https://picsum.photos/id/10/512/512",
        matchIndex: 1,
      },
      {
        imageURL: "https://picsum.photos/id/17/512/512",
        matchIndex: 2,
      },
      {
        imageURL: "https://picsum.photos/id/24/512/512",
        matchIndex: 3,
      },
    ],
    options2: [
      {
        text: "Laptop",
        matchIndex: 0,
      },
      {
        text: "Forest",
        matchIndex: 1,
      },
      {
        text: "Road",
        matchIndex: 2,
      },
      {
        text: "Book",
        matchIndex: 3,
      },
    ],
  },
};

export const mockMatchingExerciseProps = {
  base,
};
