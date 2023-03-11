import { ComponentMeta, ComponentStory } from "@storybook/react";

import ShopNavigationBar, { IShopNavigationBar } from "./ShopNavigationBar";
import { mockShopNavigationBarProps } from "./ShopNavigationBar.mocks";

export default {
  title: "atoms/ShopNavigationBar",
  component: ShopNavigationBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ShopNavigationBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ShopNavigationBar> = (args) => (
  <ShopNavigationBar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockShopNavigationBarProps.base,
} as IShopNavigationBar;
