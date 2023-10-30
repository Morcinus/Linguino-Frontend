import { ComponentMeta, ComponentStory } from "@storybook/react";

import LessonItemOverview, { ILessonItemOverview } from "./LessonItemOverview";
import { mockLessonItemOverviewProps } from "./LessonItemOverview.mocks";

export default {
  title: "layouts/LessonItemOverview",
  component: LessonItemOverview,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LessonItemOverview>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LessonItemOverview> = (args) => (
  <LessonItemOverview {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLessonItemOverviewProps.base,
} as ILessonItemOverview;
