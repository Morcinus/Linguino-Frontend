import { action } from "@storybook/addon-actions";

import { ILessonCreateUpdate } from "./LessonCreateUpdate";

const base: ILessonCreateUpdate = {
  lesson: {
    name: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet,...",
    items: [
      {
        id: "123",
        nameL1: "voda",
        nameL2: "water",
        imageURL: "https://picsum.photos/id/168/512/512",
      },
    ],
  },
  onSave: action("onSave"),
};

export const mockLessonCreateUpdateProps = {
  base,
};
