import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import UpdateLessonPage, { IUpdateLessonPage } from "./page";
import { mockUpdateLessonPageProps } from "./page.mocks";

export default {
  title: "pages/UpdateLessonPage",
  component: UpdateLessonPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof UpdateLessonPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UpdateLessonPage> = (args) => (
  <Layout {...args}>
    <UpdateLessonPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockUpdateLessonPageProps.base,
} as IUpdateLessonPage;
