import { ComponentMeta, ComponentStory } from "@storybook/react";

import AudioInputIconButton, {
  IAudioInputIconButton,
} from "./AudioInputIconButton";
import { mockAudioInputIconButtonProps } from "./AudioInputIconButton.mocks";

export default {
  title: "atoms/AudioInputIconButton",
  component: AudioInputIconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AudioInputIconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AudioInputIconButton> = (args) => (
  <AudioInputIconButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAudioInputIconButtonProps.base,
} as IAudioInputIconButton;
