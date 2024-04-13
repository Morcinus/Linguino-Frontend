import { action } from "@storybook/addon-actions";

import { ILessonsNavigationBar } from "./LessonsNavigationBar";

const base: ILessonsNavigationBar = {
  onDrawerOpen: action("onDrawerOpen"),
};

export const mockLessonsNavigationBarProps = {
  base,
};
