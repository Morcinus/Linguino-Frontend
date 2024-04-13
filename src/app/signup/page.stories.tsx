import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import SignupPage, { ISignupPage } from "./page";
import { mockSignupPageProps } from "./page.mocks";

export default {
  title: "templates/SignupPage",
  component: SignupPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SignupPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SignupPage> = (args) => (
  <Layout {...args}>
    <SignupPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSignupPageProps.base,
} as ISignupPage;
