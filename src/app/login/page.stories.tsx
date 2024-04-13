import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import LoginPage, { ILoginPage } from "./page";
import { mockLoginPageProps } from "./page.mocks";

export default {
  title: "pages/LoginPage",
  component: LoginPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LoginPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginPage> = (args) => (
  <Layout {...args}>
    <LoginPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLoginPageProps.base,
} as ILoginPage;
