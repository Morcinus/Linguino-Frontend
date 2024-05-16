import { ComponentMeta, ComponentStory } from "@storybook/react";

import MatchAudioOption, { IMatchAudioOption } from "./MatchAudioOption";
import { mockMatchAudioOptionProps } from "./MatchAudioOption.mocks";

export default {
  title: "atoms/MatchAudioOption",
  component: MatchAudioOption,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MatchAudioOption>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MatchAudioOption> = (args) => (
  <MatchAudioOption {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMatchAudioOptionProps.base,
} as IMatchAudioOption;
