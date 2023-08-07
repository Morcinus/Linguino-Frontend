import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import ManageSubscriptionPage, { IManageSubscriptionPage } from "./page";
import { mockManageSubscriptionPageProps } from "./page.mocks";

export default {
  title: "pages/ManageSubscriptionPage",
  component: ManageSubscriptionPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ManageSubscriptionPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ManageSubscriptionPage> = (args) => (
  <Layout {...args}>
    <ManageSubscriptionPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockManageSubscriptionPageProps.base,
} as IManageSubscriptionPage;
