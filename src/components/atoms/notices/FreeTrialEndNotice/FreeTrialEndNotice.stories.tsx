import { ComponentMeta, ComponentStory } from "@storybook/react";

import FreeTrialEndNotice, { IFreeTrialEndNotice } from "./FreeTrialEndNotice";
import { mockFreeTrialEndNoticeProps } from "./FreeTrialEndNotice.mocks";

export default {
  title: "atoms/notices/FreeTrialEndNotice",
  component: FreeTrialEndNotice,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FreeTrialEndNotice>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FreeTrialEndNotice> = (args) => (
  <FreeTrialEndNotice {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFreeTrialEndNoticeProps.base,
} as IFreeTrialEndNotice;
