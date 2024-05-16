import { ComponentMeta, ComponentStory } from "@storybook/react";

import HelpArticlesOverview, {
  IHelpArticlesOverview,
} from "./HelpArticlesOverview";
import { mockHelpArticlesOverviewProps } from "./HelpArticlesOverview.mocks";

export default {
  title: "layouts/HelpArticlesOverview",
  component: HelpArticlesOverview,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HelpArticlesOverview>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HelpArticlesOverview> = (args) => (
  <HelpArticlesOverview {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHelpArticlesOverviewProps.base,
} as IHelpArticlesOverview;
