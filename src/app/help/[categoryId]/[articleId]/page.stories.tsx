import { ComponentMeta, ComponentStory } from "@storybook/react";

import Layout from "./layout";
import HelpArticlePage, { IHelpArticlePage } from "./page";
import { mockHelpArticlePageProps } from "./page.mocks";

export default {
  title: "pages/HelpArticlePage",
  component: HelpArticlePage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HelpArticlePage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HelpArticlePage> = (args) => (
  <Layout>
    <HelpArticlePage {...args} />
  </Layout>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHelpArticlePageProps.base,
} as IHelpArticlePage;
