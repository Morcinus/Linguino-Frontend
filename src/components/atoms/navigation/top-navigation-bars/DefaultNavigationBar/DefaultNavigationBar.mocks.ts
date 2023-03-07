import { action } from "@storybook/addon-actions";

import { IDefaultNavigationBar } from "./DefaultNavigationBar";

const base: IDefaultNavigationBar = {
  onDrawerOpen: action("onDrawerOpen"),
};

export const mockDefaultNavigationBarProps = {
  base,
};
