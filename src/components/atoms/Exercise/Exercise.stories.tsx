import { ComponentMeta, ComponentStory } from "@storybook/react";

import Exercise, { IExercise } from "./Exercise";
import { mockExerciseProps } from "./Exercise.mocks";

export default {
  title: "templates/Exercise",
  component: Exercise,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Exercise>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Exercise> = (args) => (
  <Exercise {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockExerciseProps.base,
} as IExercise;
