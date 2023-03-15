import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import HelpArticlesPage, { IHelpArticlesPage } from "./page";
import { mockHelpArticlesPageProps } from "./page.mocks";

export default {
  title: "pages/HelpArticlesPage",
  component: HelpArticlesPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HelpArticlesPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HelpArticlesPage> = (args) => (
  <Layout>
    <HelpArticlesPage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHelpArticlesPageProps.base,
} as IHelpArticlesPage;
