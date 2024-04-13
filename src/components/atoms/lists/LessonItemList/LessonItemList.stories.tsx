import { ComponentMeta, ComponentStory } from "@storybook/react";

import LessonItemList, { ILessonItemList } from "./LessonItemList";
import { mockLessonItemListProps } from "./LessonItemList.mocks";

export default {
  title: "atoms/lists/LessonItemList",
  component: LessonItemList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LessonItemList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LessonItemList> = (args) => (
  <LessonItemList {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLessonItemListProps.base,
} as ILessonItemList;
