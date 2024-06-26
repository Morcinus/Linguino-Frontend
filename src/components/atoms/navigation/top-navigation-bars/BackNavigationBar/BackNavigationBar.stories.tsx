import { ComponentMeta, ComponentStory } from "@storybook/react";

import BackNavigationBar, { IBackNavigationBar } from "./BackNavigationBar";
import { mockBackNavigationBarProps } from "./BackNavigationBar.mocks";

export default {
  title: "atoms/navigation-bars/BackNavigationBar",
  component: BackNavigationBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BackNavigationBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BackNavigationBar> = (args) => (
  <BackNavigationBar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBackNavigationBarProps.base,
} as IBackNavigationBar;
