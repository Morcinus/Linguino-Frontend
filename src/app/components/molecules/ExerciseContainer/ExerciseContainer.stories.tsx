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

export const Base = Template.bind({});
export const ShortTextExercise = Template.bind({});
export const LongTextExercise = Template.bind({});
export const SpeechExercise = Template.bind({});
export const ShortListeningExercise = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockExerciseContainerProps.base,
} as IExerciseContainer;

ShortTextExercise.args = {
  ...mockExerciseContainerProps.shortTextExercise,
} as IExerciseContainer;

LongTextExercise.args = {
  ...mockExerciseContainerProps.longTextExercise,
} as IExerciseContainer;

SpeechExercise.args = {
  ...mockExerciseContainerProps.speechExercise,
} as IExerciseContainer;

ShortListeningExercise.args = {
  ...mockExerciseContainerProps.shortListeningExercise,
} as IExerciseContainer;
