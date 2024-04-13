import { ComponentMeta, ComponentStory } from "@storybook/react";

import FeedOverview, { IFeedOverview } from "./FeedOverview";
import { mockFeedOverviewProps } from "./FeedOverview.mocks";

export default {
  title: "layouts/FeedOverview",
  component: FeedOverview,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FeedOverview>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeedOverview> = (args) => (
  <FeedOverview {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFeedOverviewProps.base,
} as IFeedOverview;
