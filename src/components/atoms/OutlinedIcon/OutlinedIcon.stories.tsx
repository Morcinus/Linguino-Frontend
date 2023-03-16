import { ComponentMeta, ComponentStory } from "@storybook/react";

import OutlinedIcon, { IOutlinedIcon } from "./OutlinedIcon";
import { mockOutlinedIconProps } from "./OutlinedIcon.mocks";

export default {
  title: "atoms/OutlinedIcon",
  component: OutlinedIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof OutlinedIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OutlinedIcon> = (args) => (
  <OutlinedIcon {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockOutlinedIconProps.base,
} as IOutlinedIcon;
