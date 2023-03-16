import { ComponentMeta, ComponentStory } from "@storybook/react";

import ExampleSentenceList, {
  IExampleSentenceList,
} from "./ExampleSentenceList";
import { mockExampleSentenceListProps } from "./ExampleSentenceList.mocks";

export default {
  title: "atoms/lists/ExampleSentenceList",
  component: ExampleSentenceList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ExampleSentenceList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExampleSentenceList> = (args) => (
  <ExampleSentenceList {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockExampleSentenceListProps.base,
} as IExampleSentenceList;
