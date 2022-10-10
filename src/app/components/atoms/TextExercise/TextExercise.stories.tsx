import { ComponentMeta, ComponentStory } from "@storybook/react";

import TextExercise, { ITextExercise } from "./TextExercise";
import { mockTextExerciseProps } from "./TextExercise.mocks";

export default {
  title: "atoms/exercises/TextExercise",
  component: TextExercise,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TextExercise>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextExercise> = (args) => (
  <TextExercise {...args} />
);

export const Short = Template.bind({});
export const Long = Template.bind({});
export const FillInTheBlank = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Long.args = {
  ...mockTextExerciseProps.long,
} as ITextExercise;

Short.args = {
  ...mockTextExerciseProps.short,
} as ITextExercise;

FillInTheBlank.args = {
  ...mockTextExerciseProps.fillInTheBlank,
} as ITextExercise;
