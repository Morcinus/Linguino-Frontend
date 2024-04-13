import { action } from "@storybook/addon-actions";

import { IHomeNavigationBar } from "./HomeNavigationBar";

const base: IHomeNavigationBar = {
  onDrawerOpen: action("onDrawerOpen"),
};

export const mockHomeNavigationBarProps = {
  base,
};
