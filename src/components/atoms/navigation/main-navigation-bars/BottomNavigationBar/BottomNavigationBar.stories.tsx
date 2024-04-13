import { ComponentMeta, ComponentStory } from "@storybook/react";

import BottomNavigationBar, {
  IBottomNavigationBar,
} from "./BottomNavigationBar";
import { mockBottomNavigationBarProps } from "./BottomNavigationBar.mocks";

export default {
  title: "atoms/BottomNavigationBar",
  component: BottomNavigationBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BottomNavigationBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BottomNavigationBar> = (args) => (
  <BottomNavigationBar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBottomNavigationBarProps.base,
} as IBottomNavigationBar;
