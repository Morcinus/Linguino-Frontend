import { action } from "@storybook/addon-actions";

import { IShopNavigationBar } from "./ShopNavigationBar";

const base: IShopNavigationBar = {
  onDrawerOpen: action("onDrawerOpen"),
};

export const mockShopNavigationBarProps = {
  base,
};
