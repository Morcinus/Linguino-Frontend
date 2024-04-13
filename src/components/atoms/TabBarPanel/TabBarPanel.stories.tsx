import { ComponentMeta, ComponentStory } from "@storybook/react";

import TabBarPanel, { ITabBarPanel } from "./TabBarPanel";
import { mockTabBarPanelProps } from "./TabBarPanel.mocks";

export default {
  title: "atoms/TabBarPanel",
  component: TabBarPanel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TabBarPanel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TabBarPanel> = (args) => (
  <TabBarPanel {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTabBarPanelProps.base,
} as ITabBarPanel;
