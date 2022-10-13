import { ComponentMeta, ComponentStory } from "@storybook/react";

import ExerciseSwitcher, { IExerciseSwitcher } from "./ExerciseSwitcher";
import { mockExerciseSwitcherProps } from "./ExerciseSwitcher.mocks";

export default {
  title: "templates/ExerciseSwitcher",
  component: ExerciseSwitcher,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ExerciseSwitcher>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExerciseSwitcher> = (args) => (
  <ExerciseSwitcher {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockExerciseSwitcherProps.base,
} as IExerciseSwitcher;
