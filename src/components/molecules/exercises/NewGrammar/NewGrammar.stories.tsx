import { ComponentMeta, ComponentStory } from "@storybook/react";

import NewGrammar, { INewGrammar } from "./NewGrammar";
import { mockNewGrammarProps } from "./NewGrammar.mocks";

export default {
  title: "molecules/exercises/NewGrammar",
  component: NewGrammar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof NewGrammar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NewGrammar> = (args) => (
  <NewGrammar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNewGrammarProps.base,
} as INewGrammar;
