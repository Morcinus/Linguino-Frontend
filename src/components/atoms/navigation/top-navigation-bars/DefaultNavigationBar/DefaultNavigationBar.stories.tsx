import { ComponentMeta, ComponentStory } from "@storybook/react";

import DefaultNavigationBar, {
  IDefaultNavigationBar,
} from "./DefaultNavigationBar";
import { mockDefaultNavigationBarProps } from "./DefaultNavigationBar.mocks";

export default {
  title: "atoms/navigation-bars/DefaultNavigationBar",
  component: DefaultNavigationBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DefaultNavigationBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DefaultNavigationBar> = (args) => (
  <DefaultNavigationBar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDefaultNavigationBarProps.base,
} as IDefaultNavigationBar;
