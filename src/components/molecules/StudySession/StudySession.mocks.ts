import { action } from "@storybook/addon-actions";

import { IStudySession } from "./StudySession";

const base: IStudySession = {
  exercises: [
    {
      id: "ifdsamlmlkafda",
      isNew: false,
      lessonItemId: "qneOTSjAgXyMeLZEnSzG",
      type: "TEXT",
      textL1: "jablko",
      textL2: "apple",
      imageURL: "https://picsum.photos/id/168/512/512",
      textL2AudioURL: "https://mocks.linguino.org/audio-short.mp3",
    },
    {
      id: "ifdsamlmlkafda",
      isNew: false,
      lessonItemId: "qneOTSjAgXyMeLZEnSzG",
      type: "TEXT",
      textL1: "brambora",
      textL2: "potato",
      imageURL: "https://picsum.photos/id/168/512/512",
      textL2AudioURL: "https://mocks.linguino.org/audio-short.mp3",
    },
  ],
  onFinish: action("onFinish"),
  onExit: action("onExit"),
};

export const mockStudySessionProps = {
  base,
};
