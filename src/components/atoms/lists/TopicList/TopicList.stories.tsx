import { ComponentMeta, ComponentStory } from "@storybook/react";

import TopicList, { ITopicList } from "./TopicList";
import { mockTopicListProps } from "./TopicList.mocks";

export default {
  title: "atoms/lists/TopicList",
  component: TopicList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TopicList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TopicList> = (args) => (
  <TopicList {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTopicListProps.base,
} as ITopicList;
