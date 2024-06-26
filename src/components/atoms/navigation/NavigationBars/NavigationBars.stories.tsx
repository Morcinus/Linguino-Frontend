import { ComponentMeta, ComponentStory } from "@storybook/react";

import Navigation, { INavigation } from "./NavigationBars";
import { mockNavigationProps } from "./NavigationBars.mocks";

export default {
  title: "atoms/Navigation",
  component: Navigation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Navigation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNavigationProps.base,
} as INavigation;
