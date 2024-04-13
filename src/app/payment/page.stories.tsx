import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import PaymentPage, { IPaymentPage } from "./page";
import { mockPaymentPageProps } from "./page.mocks";

export default {
  title: "pages/PaymentPage",
  component: PaymentPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PaymentPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PaymentPage> = (args) => (
  <Layout {...args}>
    <PaymentPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPaymentPageProps.base,
} as IPaymentPage;
