import { ComponentMeta, ComponentStory } from "@storybook/react";

import WordButton, { IWordButton } from "./WordButton";
import { mockWordButtonProps } from "./WordButton.mocks";

export default {
  title: "atoms/WordButton",
  component: WordButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof WordButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WordButton> = (args) => (
  <WordButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockWordButtonProps.base,
} as IWordButton;
