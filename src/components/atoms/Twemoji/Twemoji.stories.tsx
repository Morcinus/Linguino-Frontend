import { ComponentMeta, ComponentStory } from "@storybook/react";

import Twemoji, { ITwemoji } from "./Twemoji";
import { mockTwemojiProps } from "./Twemoji.mocks";

export default {
  title: "atoms/Twemoji",
  component: Twemoji,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Twemoji>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Twemoji> = (args) => (
  <Twemoji {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTwemojiProps.base,
} as ITwemoji;
