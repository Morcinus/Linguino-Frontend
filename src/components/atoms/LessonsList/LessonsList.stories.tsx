import { ComponentMeta, ComponentStory } from "@storybook/react";

import LessonsList, { ILessonsList } from "./LessonsList";
import { mockLessonsListProps } from "./LessonsList.mocks";

export default {
  title: "atoms/LessonsList",
  component: LessonsList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LessonsList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LessonsList> = (args) => (
  <LessonsList {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLessonsListProps.base,
} as ILessonsList;
