import { ComponentMeta, ComponentStory } from "@storybook/react";

import CheckList, { ICheckList } from "./CheckList";
import { mockCheckListProps } from "./CheckList.mocks";

export default {
  title: "atoms/lists/CheckList",
  component: CheckList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CheckList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckList> = (args) => (
  <CheckList {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCheckListProps.base,
} as ICheckList;
