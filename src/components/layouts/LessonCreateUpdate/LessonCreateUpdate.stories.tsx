import { ComponentMeta, ComponentStory } from "@storybook/react";

import LessonCreateUpdate, { ILessonCreateUpdate } from "./LessonCreateUpdate";
import { mockLessonCreateUpdateProps } from "./LessonCreateUpdate.mocks";

export default {
  title: "layouts/LessonCreateUpdate",
  component: LessonCreateUpdate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LessonCreateUpdate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LessonCreateUpdate> = (args) => (
  <LessonCreateUpdate {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLessonCreateUpdateProps.base,
} as ILessonCreateUpdate;
