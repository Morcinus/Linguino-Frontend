import { ComponentMeta, ComponentStory } from "@storybook/react";

import FillInTableExercise, {
  IFillInTableExercise,
} from "./FillInTableExercise";
import { mockFillInTableExerciseProps } from "./FillInTableExercise.mocks";

export default {
  title: "molecules/FillInTableExercise",
  component: FillInTableExercise,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FillInTableExercise>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FillInTableExercise> = (args) => (
  <FillInTableExercise {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFillInTableExerciseProps.base,
} as IFillInTableExercise;
