import { ComponentMeta, ComponentStory } from "@storybook/react";

import HelpArticle, { IHelpArticle } from "./HelpArticle";
import { mockHelpArticleProps } from "./HelpArticle.mocks";

export default {
  title: "templates/HelpArticle",
  component: HelpArticle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HelpArticle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HelpArticle> = (args) => (
  <HelpArticle {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHelpArticleProps.base,
} as IHelpArticle;
