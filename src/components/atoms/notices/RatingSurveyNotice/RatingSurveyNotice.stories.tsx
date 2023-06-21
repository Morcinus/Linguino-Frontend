import { ComponentMeta, ComponentStory } from "@storybook/react";

import RatingSurveyNotice, { IRatingSurveyNotice } from "./RatingSurveyNotice";
import { mockRatingSurveyNoticeProps } from "./RatingSurveyNotice.mocks";

export default {
  title: "atoms/notices/RatingSurveyNotice",
  component: RatingSurveyNotice,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof RatingSurveyNotice>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RatingSurveyNotice> = (args) => (
  <RatingSurveyNotice {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockRatingSurveyNoticeProps.base,
} as IRatingSurveyNotice;
