import { action } from "@storybook/addon-actions";

import { ITabBarPanel } from "./TabBarPanel";

const base: ITabBarPanel = {
  onChange: action("onChange"),
  panelContent: "Hello world",
  tabs: [
    {
      id: "abc1",
      name: "Lorem 1",
    },
    {
      id: "abc2",
      name: "Lorem 2",
    },
    {
      id: "abc3",
      name: "Lorem 3",
    },
  ],
  value: "abc2",
};

export const mockTabBarPanelProps = {
  base,
};
