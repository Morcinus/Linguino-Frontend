import { ComponentMeta, ComponentStory } from "@storybook/react";

import StudyStatsNotice, { IStudyStatsNotice } from "./StudyStatsNotice";
import { mockStudyStatsNoticeProps } from "./StudyStatsNotice.mocks";

export default {
  title: "templates/StudyStatsNotice",
  component: StudyStatsNotice,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof StudyStatsNotice>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StudyStatsNotice> = (args) => (
  <StudyStatsNotice {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockStudyStatsNoticeProps.base,
} as IStudyStatsNotice;
