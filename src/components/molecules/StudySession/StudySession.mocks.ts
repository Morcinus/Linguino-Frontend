import { action } from "@storybook/addon-actions";

import { IStudySession } from "./StudySession";

const base: IStudySession = {
  exercises: [
    {
      id: "ifdsamlmlkafda",
      isNew: false,
      lessonItemId: "qneOTSjAgXyMeLZEnSzG",
      type: "TextExercise",
      textL1: "jablko",
      textL2: "apple",
      imageUrl: "https://picsum.photos/id/168/512/512",
      textL2AudioUrl: "https://mocks.linguino.org/audio-short.mp3",
    },
    {
      id: "ifdsamlmlkafda",
      isNew: false,
      lessonItemId: "qneOTSjAgXyMeLZEnSzG",
      type: "TextExercise",
      textL1: "brambora",
      textL2: "potato",
      imageUrl: "https://picsum.photos/id/168/512/512",
      textL2AudioUrl: "https://mocks.linguino.org/audio-short.mp3",
    },
  ],
  onFinish: action("onFinish"),
  onExit: action("onExit"),
};

export const mockStudySessionProps = {
  base,
};
