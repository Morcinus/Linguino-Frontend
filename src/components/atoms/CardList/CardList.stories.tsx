import { ComponentMeta, ComponentStory } from "@storybook/react";

import CardList, { ICardList } from "./CardList";
import { mockCardListProps } from "./CardList.mocks";

export default {
  title: "atoms/CardList",
  component: CardList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CardList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardList> = (args) => (
  <CardList {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCardListProps.base,
} as ICardList;
