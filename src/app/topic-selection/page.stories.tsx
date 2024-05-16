import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import TopicSelectionPage, { ITopicSelectionPage } from "./page";
import { mockTopicSelectionPageProps } from "./page.mocks";

export default {
  title: "pages/TopicSelectionPage",
  component: TopicSelectionPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TopicSelectionPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TopicSelectionPage> = (args) => (
  <Layout {...args}>
    <TopicSelectionPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTopicSelectionPageProps.base,
} as ITopicSelectionPage;
