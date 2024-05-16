import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import AccountSetupPage, { IAccountSetupPage } from "./page";
import { mockAccountSetupPageProps } from "./page.mocks";

export default {
  title: "pages/AccountSetupPage",
  component: AccountSetupPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AccountSetupPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AccountSetupPage> = (args) => (
  <div
    style={{
      width: "50vw",
      height: "100vh",
    }}
  >
    <Layout {...args}>
      <AccountSetupPage {...args} />
    </Layout>
  </div>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAccountSetupPageProps.base,
} as IAccountSetupPage;
