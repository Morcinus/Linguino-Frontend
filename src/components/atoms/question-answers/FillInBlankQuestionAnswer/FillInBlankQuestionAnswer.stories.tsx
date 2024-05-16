import { ComponentMeta, ComponentStory } from "@storybook/react";

import FillInBlankQuestionAnswer, {
  IFillInBlankQuestionAnswer,
} from "./FillInBlankQuestionAnswer";
import { mockFillInBlankQuestionAnswerProps } from "./FillInBlankQuestionAnswer.mocks";

export default {
  title: "atoms/FillInBlankQuestionAnswer",
  component: FillInBlankQuestionAnswer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FillInBlankQuestionAnswer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FillInBlankQuestionAnswer> = (args) => (
  <FillInBlankQuestionAnswer {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFillInBlankQuestionAnswerProps.base,
} as IFillInBlankQuestionAnswer;
