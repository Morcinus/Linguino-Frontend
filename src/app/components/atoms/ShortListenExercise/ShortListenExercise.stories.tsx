import { ComponentMeta, ComponentStory } from "@storybook/react";

import ShortListenExercise, {
  IShortListenExercise,
} from "./ShortListenExercise";
import { mockShortListenExerciseProps } from "./ShortListenExercise.mocks";

export default {
  title: "atoms/ShortListenExercise",
  component: ShortListenExercise,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ShortListenExercise>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ShortListenExercise> = (args) => (
  <ShortListenExercise {...args} />
);

export const Base = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockShortListenExerciseProps.base,
} as IShortListenExercise;
