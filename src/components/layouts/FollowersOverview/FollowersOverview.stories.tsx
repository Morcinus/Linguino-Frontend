import { ComponentMeta, ComponentStory } from "@storybook/react";

import FollowersOverview, { IFollowersOverview } from "./FollowersOverview";
import { mockFollowersOverviewProps } from "./FollowersOverview.mocks";

export default {
  title: "layouts/FollowersOverview",
  component: FollowersOverview,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FollowersOverview>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FollowersOverview> = (args) => (
  <FollowersOverview {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFollowersOverviewProps.base,
} as IFollowersOverview;
