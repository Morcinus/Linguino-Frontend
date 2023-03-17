import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import SubscriptionPage, { ISubscriptionPage } from "./page";
import { mockSubscriptionPageProps } from "./page.mocks";

export default {
  title: "templates/SubscriptionPage",
  component: SubscriptionPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SubscriptionPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SubscriptionPage> = (args) => (
  <Layout {...args}>
    <SubscriptionPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSubscriptionPageProps.base,
} as ISubscriptionPage;
