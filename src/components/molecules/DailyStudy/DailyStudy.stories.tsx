import { ComponentMeta, ComponentStory } from "@storybook/react";

import DailyStudy, { IDailyStudy } from "./DailyStudy";
import { mockDailyStudyProps } from "./DailyStudy.mocks";

export default {
  title: "molecules/DailyStudy",
  component: DailyStudy,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DailyStudy>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DailyStudy> = (args) => (
  <DailyStudy {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDailyStudyProps.base,
} as IDailyStudy;
