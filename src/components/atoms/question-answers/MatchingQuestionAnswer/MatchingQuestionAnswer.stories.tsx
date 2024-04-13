import { ComponentMeta, ComponentStory } from "@storybook/react";

import MatchingQuestionAnswer, {
  IMatchingQuestionAnswer,
} from "./MatchingQuestionAnswer";
import { mockMatchingQuestionAnswerProps } from "./MatchingQuestionAnswer.mocks";

export default {
  title: "templates/MatchingQuestionAnswer",
  component: MatchingQuestionAnswer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MatchingQuestionAnswer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MatchingQuestionAnswer> = (args) => (
  <MatchingQuestionAnswer {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMatchingQuestionAnswerProps.base,
} as IMatchingQuestionAnswer;
