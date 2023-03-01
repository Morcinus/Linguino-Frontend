import { ComponentMeta, ComponentStory } from "@storybook/react";

import StudyCalendar, { IStudyCalendar } from "./StudyCalendar";
import { mockStudyCalendarProps } from "./StudyCalendar.mocks";

export default {
  title: "templates/StudyCalendar",
  component: StudyCalendar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof StudyCalendar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StudyCalendar> = (args) => (
  <StudyCalendar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockStudyCalendarProps.base,
} as IStudyCalendar;
