import { ComponentMeta, ComponentStory } from "@storybook/react";

import AudioQuestionAnswer, {
  IAudioQuestionAnswer,
} from "./AudioQuestionAnswer";
import { mockAudioQuestionAnswerProps } from "./AudioQuestionAnswer.mocks";

export default {
  title: "molecules/QuestionAnswers/AudioQuestionAnswer",
  component: AudioQuestionAnswer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AudioQuestionAnswer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AudioQuestionAnswer> = (args) => (
  <AudioQuestionAnswer {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAudioQuestionAnswerProps.base,
} as IAudioQuestionAnswer;
