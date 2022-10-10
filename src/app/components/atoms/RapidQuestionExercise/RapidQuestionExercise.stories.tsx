import { ComponentMeta, ComponentStory } from "@storybook/react";

import RapidQuestionExercise, {
  IRapidQuestionExercise,
} from "./RapidQuestionExercise";
import { mockRapidQuestionExerciseProps } from "./RapidQuestionExercise.mocks";

export default {
  title: "atoms/exercises/RapidQuestionExercise",
  component: RapidQuestionExercise,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof RapidQuestionExercise>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RapidQuestionExercise> = (args) => (
  <RapidQuestionExercise {...args} />
);

export const Base = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockRapidQuestionExerciseProps.base,
} as IRapidQuestionExercise;
