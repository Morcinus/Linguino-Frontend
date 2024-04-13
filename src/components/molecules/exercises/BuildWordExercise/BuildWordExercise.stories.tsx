import { ComponentMeta, ComponentStory } from "@storybook/react";

import BuildWordExercise, { IBuildWordExercise } from "./BuildWordExercise";
import { mockBuildWordExerciseProps } from "./BuildWordExercise.mocks";

export default {
  title: "molecules/exercises/BuildWordExercise",
  component: BuildWordExercise,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BuildWordExercise>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BuildWordExercise> = (args) => (
  <BuildWordExercise {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBuildWordExerciseProps.base,
} as IBuildWordExercise;
