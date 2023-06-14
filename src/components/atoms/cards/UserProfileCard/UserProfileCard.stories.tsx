import { ComponentMeta, ComponentStory } from "@storybook/react";

import UserProfileCard, { IUserProfileCard } from "./UserProfileCard";
import { mockUserProfileCardProps } from "./UserProfileCard.mocks";

export default {
  title: "atoms/cards/UserProfileCard",
  component: UserProfileCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof UserProfileCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserProfileCard> = (args) => (
  <UserProfileCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockUserProfileCardProps.base,
} as IUserProfileCard;
