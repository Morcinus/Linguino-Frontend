import { ComponentMeta, ComponentStory } from "@storybook/react";

import AchievementNotice, { IAchievementNotice } from "./AchievementNotice";
import { mockAchievementNoticeProps } from "./AchievementNotice.mocks";

export default {
  title: "atoms/notices/AchievementNotice",
  component: AchievementNotice,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AchievementNotice>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AchievementNotice> = (args) => (
  <AchievementNotice {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAchievementNoticeProps.base,
} as IAchievementNotice;
