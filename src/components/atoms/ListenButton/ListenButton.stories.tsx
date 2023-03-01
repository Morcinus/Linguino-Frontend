import { ComponentMeta, ComponentStory } from "@storybook/react";

import ListenButton, { IListenButton } from "./ListenButton";
import { mockListenButtonProps } from "./ListenButton.mocks";

export default {
  title: "atoms/ListenButton",
  component: ListenButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ListenButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ListenButton> = (args) => (
  <ListenButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockListenButtonProps.base,
} as IListenButton;
