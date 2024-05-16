import { ComponentMeta, ComponentStory } from "@storybook/react";

import LevelProgressBar, { ILevelProgressBar } from "./LevelProgressBar";
import { mockLevelProgressBarProps } from "./LevelProgressBar.mocks";

export default {
  title: "atoms/LevelProgressBar",
  component: LevelProgressBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LevelProgressBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LevelProgressBar> = (args) => (
  <LevelProgressBar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLevelProgressBarProps.base,
} as ILevelProgressBar;
