import { ComponentMeta, ComponentStory } from "@storybook/react";

import SimpleCard, { ISimpleCard } from "./SimpleCard";
import { mockSimpleCardProps } from "./SimpleCard.mocks";

export default {
  title: "atoms/cards/SimpleCard",
  component: SimpleCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SimpleCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleCard> = (args) => (
  <SimpleCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSimpleCardProps.base,
} as ISimpleCard;
