import { action } from "@storybook/addon-actions";
import icons from "styles/icons";

import { ICircleLessonButton } from "./CircleLessonButton";

const base: ICircleLessonButton = {
  title: "Past Simple",
  icon: icons.next,
  lessonId: "dfnsjfnklfsdg",
  lessonType: "GRAMMAR",
  active: false,
  onSetActive: action("onSetActive"),
};

export const mockCircleLessonButtonProps = {
  base,
};
