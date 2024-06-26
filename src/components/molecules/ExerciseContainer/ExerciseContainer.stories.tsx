import { ComponentMeta, ComponentStory } from "@storybook/react";

import ExerciseContainer, { IExerciseContainer } from "./ExerciseContainer";
import { mockExerciseContainerProps } from "./ExerciseContainer.mocks";

export default {
  title: "molecules/ExerciseContainer",
  component: ExerciseContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ExerciseContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExerciseContainer> = (args) => (
  <ExerciseContainer {...args} />
);

export const ShortListeningExercise = Template.bind({});
export const SpeechExercise = Template.bind({});
export const ListeningExercise = Template.bind({});
export const TextExercise = Template.bind({});
export const ReadingExercise = Template.bind({});
export const RepeatAudioExercise = Template.bind({});
export const ReadAloudExercise = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

ReadAloudExercise.args = {
  ...mockExerciseContainerProps.readAloudExercise,
} as IExerciseContainer;

RepeatAudioExercise.args = {
  ...mockExerciseContainerProps.repeatAudioExercise,
} as IExerciseContainer;

ReadingExercise.args = {
  ...mockExerciseContainerProps.readingExercise,
} as IExerciseContainer;

TextExercise.args = {
  ...mockExerciseContainerProps.textExercise,
} as IExerciseContainer;

ShortListeningExercise.args = {
  ...mockExerciseContainerProps.shortListeningExercise,
} as IExerciseContainer;

SpeechExercise.args = {
  ...mockExerciseContainerProps.speechExercise,
} as IExerciseContainer;

ListeningExercise.args = {
  ...mockExerciseContainerProps.listeningExercise,
} as IExerciseContainer;
