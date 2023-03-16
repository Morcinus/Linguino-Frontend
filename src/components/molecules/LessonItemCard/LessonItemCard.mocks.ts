import { action } from "@storybook/addon-actions";

import { ILessonItemCard } from "./LessonItemCard";

const base: ILessonItemCard = {
  lessonItem: {
    favorite: false,
    id: "akjdnfldan",
    nameL1: "Lorem ipsum",
    nameL2: "Lorem ipsum",
    visible: true,
    progress: 42,
    background: {
      imageURL: "https://picsum.photos/id/168/1920/1080",
    },
    audioURL:
      "https://www.chosic.com/wp-content/uploads/2021/02/Monkeys-Spinning-Monkeys.mp3",
    description:
      "noun /pronunciation/\n #### Definition\n Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  onFavoriteChange: action("onFavoriteChange"),
  onVisibleChange: action("onVisibleChange"),
};

export const mockLessonItemCardProps = {
  base,
};
