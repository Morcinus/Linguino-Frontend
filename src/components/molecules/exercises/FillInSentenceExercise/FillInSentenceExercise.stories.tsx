import { ComponentMeta, ComponentStory } from "@storybook/react";

import FillInSentenceExercise, {
  IFillInSentenceExercise,
} from "./FillInSentenceExercise";
import { mockFillInSentenceExerciseProps } from "./FillInSentenceExercise.mocks";

export default {
  title: "molecules/FillInSentenceExercise",
  component: FillInSentenceExercise,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FillInSentenceExercise>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FillInSentenceExercise> = (args) => (
  <FillInSentenceExercise {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFillInSentenceExerciseProps.base,
} as IFillInSentenceExercise;
