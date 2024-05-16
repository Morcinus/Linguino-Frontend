import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import ChangeEmailPage, { IChangeEmailPage } from "./page";
import { mockChangeEmailPageProps } from "./page.mocks";

export default {
  title: "pages/ChangeEmailPage",
  component: ChangeEmailPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ChangeEmailPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChangeEmailPage> = (args) => (
  <Layout {...args}>
    <ChangeEmailPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockChangeEmailPageProps.base,
} as IChangeEmailPage;
