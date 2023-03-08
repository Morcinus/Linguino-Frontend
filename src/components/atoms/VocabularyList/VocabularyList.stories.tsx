import { ComponentMeta, ComponentStory } from "@storybook/react";

import VocabularyList, { IVocabularyList } from "./VocabularyList";
import { mockVocabularyListProps } from "./VocabularyList.mocks";

export default {
  title: "templates/VocabularyList",
  component: VocabularyList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof VocabularyList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VocabularyList> = (args) => (
  <VocabularyList {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockVocabularyListProps.base,
} as IVocabularyList;
