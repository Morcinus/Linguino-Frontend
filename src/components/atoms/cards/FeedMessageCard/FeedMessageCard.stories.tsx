import { ComponentMeta, ComponentStory } from "@storybook/react";

import FeedMessageCard, { IFeedMessageCard } from "./FeedMessageCard";
import { mockFeedMessageCardProps } from "./FeedMessageCard.mocks";

export default {
  title: "atoms/cards/FeedMessageCard",
  component: FeedMessageCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FeedMessageCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeedMessageCard> = (args) => (
  <FeedMessageCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFeedMessageCardProps.base,
} as IFeedMessageCard;
