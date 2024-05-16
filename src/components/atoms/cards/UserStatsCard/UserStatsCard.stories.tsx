import { ComponentMeta, ComponentStory } from "@storybook/react";

import UserStatsCard, { IUserStatsCard } from "./UserStatsCard";
import { mockUserStatsCardProps } from "./UserStatsCard.mocks";

export default {
  title: "atoms/UserStatsCard",
  component: UserStatsCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof UserStatsCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserStatsCard> = (args) => (
  <UserStatsCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockUserStatsCardProps.base,
} as IUserStatsCard;
