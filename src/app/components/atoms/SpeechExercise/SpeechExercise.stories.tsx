import { ComponentMeta, ComponentStory } from "@storybook/react";

import SpeechExercise, { ISpeechExercise } from "./SpeechExercise";
import { mockSpeechExerciseProps } from "./SpeechExercise.mocks";

export default {
  title: "atoms/exercises/SpeechExercise",
  component: SpeechExercise,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SpeechExercise>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SpeechExercise> = (args) => (
  <SpeechExercise {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSpeechExerciseProps.base,
} as ISpeechExercise;
