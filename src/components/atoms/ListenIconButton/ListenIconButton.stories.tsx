import { ComponentMeta, ComponentStory } from "@storybook/react";

import ListenIconButton, { IListenIconButton } from "./ListenIconButton";
import { mockListenIconButtonProps } from "./ListenIconButton.mocks";

export default {
  title: "atoms/ListenIconButton",
  component: ListenIconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ListenIconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ListenIconButton> = (args) => (
  <ListenIconButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockListenIconButtonProps.base,
} as IListenIconButton;
