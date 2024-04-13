import { ComponentMeta, ComponentStory } from "@storybook/react";

import RepeatAudioExercise, {
  IRepeatAudioExercise,
} from "./RepeatAudioExercise";
import { mockRepeatAudioExerciseProps } from "./RepeatAudioExercise.mocks";

export default {
  title: "molecules/exercises/RepeatAudioExercise",
  component: RepeatAudioExercise,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof RepeatAudioExercise>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RepeatAudioExercise> = (args) => (
  <RepeatAudioExercise {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockRepeatAudioExerciseProps.base,
} as IRepeatAudioExercise;
