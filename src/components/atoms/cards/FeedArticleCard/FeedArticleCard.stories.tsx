import { ComponentMeta, ComponentStory } from "@storybook/react";

import FeedArticleCard, { IFeedArticleCard } from "./FeedArticleCard";
import { mockFeedArticleCardProps } from "./FeedArticleCard.mocks";

export default {
  title: "atoms/cards/FeedArticleCard",
  component: FeedArticleCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FeedArticleCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeedArticleCard> = (args) => (
  <FeedArticleCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFeedArticleCardProps.base,
} as IFeedArticleCard;
