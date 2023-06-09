import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import CoursesPage, { ICoursesPage } from "./page";
import { mockCoursesPageProps } from "./page.mocks";

export default {
  title: "templates/CoursesPage",
  component: CoursesPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CoursesPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CoursesPage> = (args) => (
  <Layout {...args}>
    <CoursesPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCoursesPageProps.base,
} as ICoursesPage;
