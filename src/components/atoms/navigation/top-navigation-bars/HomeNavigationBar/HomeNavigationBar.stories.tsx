import { ComponentMeta, ComponentStory } from "@storybook/react";

import HomeNavigationBar, { IHomeNavigationBar } from "./HomeNavigationBar";
import { mockHomeNavigationBarProps } from "./HomeNavigationBar.mocks";

export default {
  title: "atoms/HomeNavigationBar",
  component: HomeNavigationBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HomeNavigationBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HomeNavigationBar> = (args) => (
  <HomeNavigationBar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHomeNavigationBarProps.base,
} as IHomeNavigationBar;
