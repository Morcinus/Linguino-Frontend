import { action } from "@storybook/addon-actions";

import { ILessonItemCard } from "./LessonItemCard";

const base: ILessonItemCard = {
  lessonItem: {
    favorite: false,
    id: "akjdnfldan",
    nameL1: "Lorem ipsum",
    nameL2: "Lorem ipsum",
    progress: 42,
    backgroundImageUrl: "https://picsum.photos/id/168/1920/1080",
    audioUrl: "https://mocks.linguino.org/audio-short.mp3",
    description:
      "noun /pronunciation/\n #### Definition\n Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  onFavoriteChange: action("onFavoriteChange"),
};

export const mockLessonItemCardProps = {
  base,
};
