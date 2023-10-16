import { ComponentMeta, ComponentStory } from "@storybook/react";

import LessonStudy, { ILessonStudy } from "./LessonStudy";
import { mockLessonStudyProps } from "./LessonStudy.mocks";

export default {
  title: "molecules/LessonStudy",
  component: LessonStudy,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LessonStudy>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LessonStudy> = (args) => (
  <LessonStudy {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLessonStudyProps.base,
} as ILessonStudy;
