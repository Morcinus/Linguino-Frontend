import { ComponentMeta, ComponentStory } from "@storybook/react";

import HelpCategoriesOverview, {
  IHelpCategoriesOverview,
} from "./HelpCategoriesOverview";
import { mockHelpCategoriesOverviewProps } from "./HelpCategoriesOverview.mocks";

export default {
  title: "layouts/HelpCategoriesOverview",
  component: HelpCategoriesOverview,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HelpCategoriesOverview>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HelpCategoriesOverview> = (args) => (
  <HelpCategoriesOverview {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHelpCategoriesOverviewProps.base,
} as IHelpCategoriesOverview;
