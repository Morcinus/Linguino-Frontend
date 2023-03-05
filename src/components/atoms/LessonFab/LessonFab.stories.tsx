import { ComponentMeta, ComponentStory } from "@storybook/react";

import LessonFab, { ILessonFab } from "./LessonFab";
import { mockLessonFabProps } from "./LessonFab.mocks";

export default {
  title: "atoms/LessonFab",
  component: LessonFab,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LessonFab>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LessonFab> = (args) => (
  <LessonFab {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLessonFabProps.base,
} as ILessonFab;
