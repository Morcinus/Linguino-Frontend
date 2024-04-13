import { ComponentMeta, ComponentStory } from "@storybook/react";

import ProgressCard, { IProgressCard } from "./ProgressCard";
import { mockProgressCardProps } from "./ProgressCard.mocks";

export default {
  title: "atoms/cards/ProgressCard",
  component: ProgressCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProgressCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProgressCard> = (args) => (
  <ProgressCard {...args} />
);

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Small.args = {
  ...mockProgressCardProps.small,
} as IProgressCard;

Medium.args = {
  ...mockProgressCardProps.medium,
} as IProgressCard;

Large.args = {
  ...mockProgressCardProps.large,
} as IProgressCard;
