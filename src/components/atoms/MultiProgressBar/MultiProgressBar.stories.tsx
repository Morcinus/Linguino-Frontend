import { ComponentMeta, ComponentStory } from "@storybook/react";

import MultiProgressBar, { IMultiProgressBar } from "./MultiProgressBar";
import { mockMultiProgressBarProps } from "./MultiProgressBar.mocks";

export default {
  title: "templates/MultiProgressBar",
  component: MultiProgressBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MultiProgressBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MultiProgressBar> = (args) => (
  <MultiProgressBar {...args} />
);

export const Base = Template.bind({});
export const Many = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMultiProgressBarProps.base,
} as IMultiProgressBar;

Many.args = {
  ...mockMultiProgressBarProps.many,
} as IMultiProgressBar;
