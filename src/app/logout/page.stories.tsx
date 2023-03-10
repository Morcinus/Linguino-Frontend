import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import LogoutPage, { ILogoutPage } from "./page";
import { mockLogoutPageProps } from "./page.mocks";

export default {
  title: "pages/LogoutPage",
  component: LogoutPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LogoutPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LogoutPage> = (args) => (
  <Layout>
    <LogoutPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLogoutPageProps.base,
} as ILogoutPage;
