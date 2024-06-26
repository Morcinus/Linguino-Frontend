import { ComponentMeta, ComponentStory } from "@storybook/react";

import LessonItemsSearchResults, {
  ILessonItemsSearchResults,
} from "./LessonItemsSearchResults";
import { mockLessonItemsSearchResultsProps } from "./LessonItemsSearchResults.mocks";

export default {
  title: "atoms/LessonItemsSearchResults",
  component: LessonItemsSearchResults,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LessonItemsSearchResults>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LessonItemsSearchResults> = (args) => (
  <LessonItemsSearchResults {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLessonItemsSearchResultsProps.base,
} as ILessonItemsSearchResults;
