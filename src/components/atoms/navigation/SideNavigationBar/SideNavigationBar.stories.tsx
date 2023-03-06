import { ComponentMeta, ComponentStory } from "@storybook/react";

import SideNavigationBar, { ISideNavigationBar } from "./SideNavigationBar";
import { mockSideNavigationBarProps } from "./SideNavigationBar.mocks";

export default {
  title: "atoms/SideNavigationBar",
  component: SideNavigationBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SideNavigationBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SideNavigationBar> = (args) => (
  <SideNavigationBar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSideNavigationBarProps.base,
} as ISideNavigationBar;
