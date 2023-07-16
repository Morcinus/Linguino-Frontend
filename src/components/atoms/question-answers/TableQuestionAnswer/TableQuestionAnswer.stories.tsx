import { ComponentMeta, ComponentStory } from "@storybook/react";

import TableQuestionAnswer, {
  ITableQuestionAnswer,
} from "./TableQuestionAnswer";
import { mockTableQuestionAnswerProps } from "./TableQuestionAnswer.mocks";

export default {
  title: "templates/TableQuestionAnswer",
  component: TableQuestionAnswer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TableQuestionAnswer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TableQuestionAnswer> = (args) => (
  <TableQuestionAnswer {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTableQuestionAnswerProps.base,
} as ITableQuestionAnswer;
