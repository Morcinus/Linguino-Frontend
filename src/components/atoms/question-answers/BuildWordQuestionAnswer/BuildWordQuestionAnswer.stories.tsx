import { ComponentMeta, ComponentStory } from "@storybook/react";

import BuildWordQuestionAnswer, {
  IBuildWordQuestionAnswer,
} from "./BuildWordQuestionAnswer";
import { mockBuildWordQuestionAnswerProps } from "./BuildWordQuestionAnswer.mocks";

export default {
  title: "atoms/BuildWordQuestionAnswer",
  component: BuildWordQuestionAnswer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BuildWordQuestionAnswer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BuildWordQuestionAnswer> = (args) => (
  <BuildWordQuestionAnswer {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBuildWordQuestionAnswerProps.base,
} as IBuildWordQuestionAnswer;
