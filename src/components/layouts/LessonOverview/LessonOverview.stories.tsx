import { ComponentMeta, ComponentStory } from "@storybook/react";

import LessonOverview, { ILessonOverview } from "./LessonOverview";
import { mockLessonOverviewProps } from "./LessonOverview.mocks";

export default {
  title: "layouts/LessonOverview",
  component: LessonOverview,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LessonOverview>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LessonOverview> = (args) => (
  <LessonOverview {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLessonOverviewProps.base,
} as ILessonOverview;
