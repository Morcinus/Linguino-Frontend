import { ComponentMeta, ComponentStory } from "@storybook/react";

import VisibilityButton, { IVisibilityButton } from "./VisibilityButton";
import { mockVisibilityButtonProps } from "./VisibilityButton.mocks";

export default {
  title: "atoms/VisibilityButton",
  component: VisibilityButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof VisibilityButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VisibilityButton> = (args) => (
  <VisibilityButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockVisibilityButtonProps.base,
} as IVisibilityButton;
