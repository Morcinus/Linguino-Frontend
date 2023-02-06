import { ComponentMeta, ComponentStory } from "@storybook/react";

import TextAnswer, { ITextAnswer } from "./TextAnswer";
import { mockTextAnswerProps } from "./TextAnswer.mocks";

export default {
  title: "atoms/TextAnswer",
  component: TextAnswer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TextAnswer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextAnswer> = (args) => (
  <TextAnswer {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTextAnswerProps.base,
} as ITextAnswer;
