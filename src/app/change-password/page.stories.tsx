import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import ChangePasswordPage, { IChangePasswordPage } from "./page";
import { mockChangePasswordPageProps } from "./page.mocks";

export default {
  title: "pages/ChangePasswordPage",
  component: ChangePasswordPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ChangePasswordPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChangePasswordPage> = (args) => (
  <Layout {...args}>
    <ChangePasswordPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockChangePasswordPageProps.base,
} as IChangePasswordPage;
