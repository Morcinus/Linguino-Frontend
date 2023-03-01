import { ComponentMeta, ComponentStory } from "@storybook/react";

import YouTubeVideoEmbed, { IYouTubeVideoEmbed } from "./YouTubeVideoEmbed";
import { mockYouTubeVideoEmbedProps } from "./YouTubeVideoEmbed.mocks";

export default {
  title: "atoms/YouTubeVideoEmbed",
  component: YouTubeVideoEmbed,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof YouTubeVideoEmbed>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof YouTubeVideoEmbed> = (args) => (
  <YouTubeVideoEmbed {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockYouTubeVideoEmbedProps.base,
} as IYouTubeVideoEmbed;
