import { ComponentMeta, ComponentStory } from "@storybook/react";

import TextQuestionAnswer, { ITextQuestionAnswer } from "./TextQuestionAnswer";
import { mockTextQuestionAnswerProps } from "./TextQuestionAnswer.mocks";

export default {
  title: "molecules/QuestionAnswers/TextQuestionAnswer",
  component: TextQuestionAnswer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TextQuestionAnswer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextQuestionAnswer> = (args) => (
  <TextQuestionAnswer {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTextQuestionAnswerProps.base,
} as ITextQuestionAnswer;
