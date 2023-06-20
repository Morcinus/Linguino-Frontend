import { ComponentMeta, ComponentStory } from "@storybook/react";

import NewVocabulary, { INewVocabulary } from "./NewVocabulary";
import { mockNewVocabularyProps } from "./NewVocabulary.mocks";

export default {
  title: "molecules/exercises/NewVocabulary",
  component: NewVocabulary,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof NewVocabulary>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NewVocabulary> = (args) => (
  <NewVocabulary {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNewVocabularyProps.base,
} as INewVocabulary;
