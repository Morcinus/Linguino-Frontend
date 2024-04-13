import { ComponentMeta, ComponentStory } from "@storybook/react";

import MultipleChoiceCardList, {
  IMultipleChoiceCardList,
} from "./MultipleChoiceCardList";
import { mockMultipleChoiceCardListProps } from "./MultipleChoiceCardList.mocks";

export default {
  title: "atoms/MultipleChoiceCardList",
  component: MultipleChoiceCardList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MultipleChoiceCardList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MultipleChoiceCardList> = (args) => (
  <MultipleChoiceCardList {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMultipleChoiceCardListProps.base,
} as IMultipleChoiceCardList;
