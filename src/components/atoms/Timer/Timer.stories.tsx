import { ComponentMeta, ComponentStory } from "@storybook/react";

import Timer, { ITimer } from "./Timer";
import { mockTimerProps } from "./Timer.mocks";

export default {
  title: "atoms/Timer",
  component: Timer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Timer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Timer> = (args) => <Timer {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTimerProps.base,
} as ITimer;
