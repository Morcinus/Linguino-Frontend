import { ComponentMeta, ComponentStory } from "@storybook/react";

import ListeningExercise, { IListeningExercise } from "./ListeningExercise";
import { mockListeningExerciseProps } from "./ListeningExercise.mocks";

export default {
  title: "molecules/exercises/ListeningExercise",
  component: ListeningExercise,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ListeningExercise>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ListeningExercise> = (args) => (
  <ListeningExercise {...args} />
);

export const Base = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockListeningExerciseProps.base,
} as IListeningExercise;
