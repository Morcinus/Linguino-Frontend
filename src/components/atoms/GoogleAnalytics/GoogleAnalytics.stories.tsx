import { ComponentMeta, ComponentStory } from "@storybook/react";

import GoogleAnalytics, { IGoogleAnalytics } from "./GoogleAnalytics";
import { mockGoogleAnalyticsProps } from "./GoogleAnalytics.mocks";

export default {
  title: "atoms/GoogleAnalytics",
  component: GoogleAnalytics,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof GoogleAnalytics>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GoogleAnalytics> = (args) => (
  <GoogleAnalytics {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockGoogleAnalyticsProps.base,
} as IGoogleAnalytics;
