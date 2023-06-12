import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import CreateLessonPage, { ICreateLessonPage } from "./page";
import { mockCreateLessonPageProps } from "./page.mocks";

export default {
  title: "templates/CreateLessonPage",
  component: CreateLessonPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CreateLessonPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CreateLessonPage> = (args) => (
  <Layout {...args}>
    <CreateLessonPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCreateLessonPageProps.base,
} as ICreateLessonPage;
