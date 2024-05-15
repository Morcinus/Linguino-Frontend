import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import Feed, { IFeed } from "./page";
import { mockFeedProps } from "./page.mocks";

export default {
  title: "pages/Feed",
  component: Feed,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Feed>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Feed> = (args) => (
  <Layout {...args}>
    <Feed {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFeedProps.base,
} as IFeed;
