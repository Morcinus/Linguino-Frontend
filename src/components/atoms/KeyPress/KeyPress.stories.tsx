import { ComponentMeta, ComponentStory } from "@storybook/react";

import KeyPress, { IKeyPress } from "./KeyPress";
import { mockKeyPressProps } from "./KeyPress.mocks";

export default {
  title: "templates/KeyPress",
  component: KeyPress,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof KeyPress>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof KeyPress> = (args) => (
  <KeyPress {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockKeyPressProps.base,
} as IKeyPress;
