import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import UserLessonsPage, { IUserLessonsPage } from "./page";
import { mockUserLessonsPageProps } from "./page.mocks";

export default {
  title: "templates/UserLessonsPage",
  component: UserLessonsPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof UserLessonsPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserLessonsPage> = (args) => (
  <Layout {...args}>
    <UserLessonsPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockUserLessonsPageProps.base,
} as IUserLessonsPage;
