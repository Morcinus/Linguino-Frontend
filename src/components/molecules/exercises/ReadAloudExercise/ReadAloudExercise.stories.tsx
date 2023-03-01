import { ComponentMeta, ComponentStory } from "@storybook/react";

import ReadAloudExercise, { IReadAloudExercise } from "./ReadAloudExercise";
import { mockReadAloudExerciseProps } from "./ReadAloudExercise.mocks";

export default {
  title: "molecules/exercises/ReadAloudExercise",
  component: ReadAloudExercise,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ReadAloudExercise>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ReadAloudExercise> = (args) => (
  <ReadAloudExercise {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockReadAloudExerciseProps.base,
} as IReadAloudExercise;
