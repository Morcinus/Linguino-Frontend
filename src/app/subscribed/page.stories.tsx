import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import SubscribedPage, { ISubscribedPage } from "./page";
import { mockSubscribedPageProps } from "./page.mocks";

export default {
  title: "pages/SubscribedPage",
  component: SubscribedPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SubscribedPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SubscribedPage> = (args) => (
  <Layout {...args}>
    <SubscribedPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSubscribedPageProps.base,
} as ISubscribedPage;
