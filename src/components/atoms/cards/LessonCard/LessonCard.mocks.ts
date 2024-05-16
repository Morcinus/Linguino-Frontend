import { action } from "@storybook/addon-actions";

import { ILessonCard } from "./LessonCard";

const base: ILessonCard = {
  lesson: {
    favorite: false,
    feedback: undefined,
    id: "akjdnfldan",
    name: "Lorem ipsum",
    visible: true,
    backgroundImageUrl: "https://picsum.photos/id/168/1920/1080",
    items: [],
    level: "a1",
  },
  onFavoriteChange: action("onFavoriteChange"),
  onVisibleChange: action("onVisibleChange"),
};

export const mockLessonCardProps = {
  base,
};
