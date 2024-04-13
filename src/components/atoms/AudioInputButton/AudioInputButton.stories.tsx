import { ComponentMeta, ComponentStory } from "@storybook/react";

import AudioInputButton, { IAudioInputButton } from "./AudioInputButton";
import { mockAudioInputButtonProps } from "./AudioInputButton.mocks";

export default {
  title: "atoms/AudioInputButton",
  component: AudioInputButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AudioInputButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AudioInputButton> = (args) => (
  <AudioInputButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAudioInputButtonProps.base,
} as IAudioInputButton;
