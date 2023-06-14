import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import UsersPage, { IUsersPage } from "./page";
import { mockUsersPageProps } from "./page.mocks";

export default {
  title: "pages/UsersPage",
  component: UsersPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof UsersPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UsersPage> = (args) => (
  <Layout>
    <UsersPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockUsersPageProps.base,
} as IUsersPage;
