import { ComponentMeta, ComponentStory } from "@storybook/react";

import FullWidthButton, { IFullWidthButton } from "./FullWidthButton";
import { mockFullWidthButtonProps } from "./FullWidthButton.mocks";

export default {
  title: "atoms/FullWidthButton",
  component: FullWidthButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FullWidthButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FullWidthButton> = (args) => (
  <FullWidthButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFullWidthButtonProps.base,
} as IFullWidthButton;
