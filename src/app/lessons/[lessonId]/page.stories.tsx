import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import LessonPage, { ILessonPage } from "./page";
import { mockLessonPageProps } from "./page.mocks";

export default {
  title: "pages/LessonPage",
  component: LessonPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LessonPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LessonPage> = (args) => (
  <Layout {...args}>
    <LessonPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLessonPageProps.base,
} as ILessonPage;
