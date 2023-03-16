import { ComponentMeta, ComponentStory } from "@storybook/react";

import FeedbackCard, { IFeedbackCard } from "./FeedbackCard";
import { mockFeedbackCardProps } from "./FeedbackCard.mocks";

export default {
  title: "atoms/cards/FeedbackCard",
  component: FeedbackCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FeedbackCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeedbackCard> = (args) => (
  <FeedbackCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFeedbackCardProps.base,
} as IFeedbackCard;
