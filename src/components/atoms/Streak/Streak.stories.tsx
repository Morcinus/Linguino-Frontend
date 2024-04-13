import { ComponentMeta, ComponentStory } from "@storybook/react";

import Streak, { IStreak } from "./Streak";
import { mockStreakProps } from "./Streak.mocks";

export default {
  title: "atoms/Streak",
  component: Streak,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Streak>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Streak> = (args) => <Streak {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockStreakProps.base,
} as IStreak;
