import { ComponentMeta, ComponentStory } from "@storybook/react";

import FeedVideoCard, { IFeedVideoCard } from "./FeedVideoCard";
import { mockFeedVideoCardProps } from "./FeedVideoCard.mocks";

export default {
  title: "atoms/cards/FeedVideoCard",
  component: FeedVideoCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FeedVideoCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeedVideoCard> = (args) => (
  <FeedVideoCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFeedVideoCardProps.base,
} as IFeedVideoCard;
