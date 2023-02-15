import { ComponentMeta, ComponentStory } from "@storybook/react";

import ReadingExercise, { IReadingExercise } from "./ReadingExercise";
import { mockReadingExerciseProps } from "./ReadingExercise.mocks";

export default {
  title: "molecules/exercises/ReadingExercise",
  component: ReadingExercise,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ReadingExercise>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ReadingExercise> = (args) => (
  <ReadingExercise {...args} />
);

export const Base = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockReadingExerciseProps.base,
} as IReadingExercise;
