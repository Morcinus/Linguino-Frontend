import { action } from "@storybook/addon-actions";

import { IDrawer } from "./Drawer";

const base: IDrawer = {
  open: true,
  onClose: action("onClose"),
};

export const mockDrawerProps = {
  base,
};
