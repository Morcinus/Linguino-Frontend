import { ComponentMeta, ComponentStory } from "@storybook/react";

import ExerciseContinueButton, {
  IExerciseContinueButton,
} from "./ExerciseContinueButton";
import { mockExerciseContinueButtonProps } from "./ExerciseContinueButton.mocks";

export default {
  title: "atoms/ExerciseContinueButton",
  component: ExerciseContinueButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ExerciseContinueButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExerciseContinueButton> = (args) => (
  <ExerciseContinueButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockExerciseContinueButtonProps.base,
} as IExerciseContinueButton;
