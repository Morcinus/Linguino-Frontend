import { ComponentMeta, ComponentStory } from "@storybook/react";

import LinkCardList, { ILinkCardList } from "./LinkCardList";
import { mockLinkCardListProps } from "./LinkCardList.mocks";

export default {
  title: "atoms/LinkCardList",
  component: LinkCardList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LinkCardList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LinkCardList> = (args) => (
  <LinkCardList {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLinkCardListProps.base,
} as ILinkCardList;
