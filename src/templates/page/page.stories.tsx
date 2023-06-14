import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import BaseTemplatePage, { IBaseTemplatePage } from "./page";
import { mockBaseTemplatePageProps } from "./page.mocks";

export default {
  title: "templates/BaseTemplatePage",
  component: BaseTemplatePage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BaseTemplatePage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseTemplatePage> = (args) => (
  <Layout {...args}>
    <BaseTemplatePage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseTemplatePageProps.base,
} as IBaseTemplatePage;
