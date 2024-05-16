import { ComponentMeta, ComponentStory } from "@storybook/react";

import MatchingExercise, { IMatchingExercise } from "./MatchingExercise";
import { mockMatchingExerciseProps } from "./MatchingExercise.mocks";

export default {
  title: "molecules/MatchingExercise",
  component: MatchingExercise,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MatchingExercise>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MatchingExercise> = (args) => (
  <MatchingExercise {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMatchingExerciseProps.base,
} as IMatchingExercise;
