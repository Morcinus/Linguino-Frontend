import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import LessonItemPage, { ILessonItemPage } from "./page";
import { mockLessonItemPageProps } from "./page.mocks";

export default {
  title: "pages/LessonItemPage",
  component: LessonItemPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LessonItemPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LessonItemPage> = (args) => (
  <Layout {...args}>
    <LessonItemPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLessonItemPageProps.base,
} as ILessonItemPage;
