import { ComponentMeta, ComponentStory } from "@storybook/react";

import ShortListeningExercise, {
  IShortListeningExercise,
} from "./ShortListeningExercise";
import { mockShortListeningExerciseProps } from "./ShortListeningExercise.mocks";

export default {
  title: "molecules/exercises/ShortListeningExercise",
  component: ShortListeningExercise,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ShortListeningExercise>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ShortListeningExercise> = (args) => (
  <ShortListeningExercise {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockShortListeningExerciseProps.base,
} as IShortListeningExercise;
