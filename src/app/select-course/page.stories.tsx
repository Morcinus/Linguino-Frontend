import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import SelectCoursePage, { ISelectCoursePage } from "./page";
import { mockSelectCoursePageProps } from "./page.mocks";

export default {
  title: "pages/SelectCoursePage",
  component: SelectCoursePage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SelectCoursePage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectCoursePage> = (args) => (
  <Layout {...args}>
    <SelectCoursePage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSelectCoursePageProps.base,
} as ISelectCoursePage;
