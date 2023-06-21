import { ComponentMeta, ComponentStory } from "@storybook/react";

import RewardNotice, { IRewardNotice } from "./RewardNotice";
import { mockRewardNoticeProps } from "./RewardNotice.mocks";

export default {
  title: "atoms/notices/RewardNotice",
  component: RewardNotice,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof RewardNotice>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RewardNotice> = (args) => (
  <RewardNotice {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockRewardNoticeProps.base,
} as IRewardNotice;
