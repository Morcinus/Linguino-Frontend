import { ComponentMeta, ComponentStory } from "@storybook/react";

import CircleLessonButton, { ICircleLessonButton } from "./CircleLessonButton";
import { mockCircleLessonButtonProps } from "./CircleLessonButton.mocks";

export default {
  title: "atoms/CircleLessonButton",
  component: CircleLessonButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CircleLessonButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CircleLessonButton> = (args) => (
  <CircleLessonButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCircleLessonButtonProps.base,
} as ICircleLessonButton;
