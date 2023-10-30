import { ComponentMeta, ComponentStory } from "@storybook/react";

import TopicsOverview, { ITopicsOverview } from "./TopicsOverview";
import { mockTopicsOverviewProps } from "./TopicsOverview.mocks";

export default {
  title: "templates/TopicsOverview",
  component: TopicsOverview,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TopicsOverview>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TopicsOverview> = (args) => (
  <TopicsOverview {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTopicsOverviewProps.base,
} as ITopicsOverview;
