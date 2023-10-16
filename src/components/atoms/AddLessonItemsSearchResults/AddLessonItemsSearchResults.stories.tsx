import { ComponentMeta, ComponentStory } from "@storybook/react";

import AddLessonItemsSearchResults, {
  IAddLessonItemsSearchResults,
} from "./AddLessonItemsSearchResults";
import { mockAddLessonItemsSearchResultsProps } from "./AddLessonItemsSearchResults.mocks";

export default {
  title: "atoms/AddLessonItemsSearchResults",
  component: AddLessonItemsSearchResults,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AddLessonItemsSearchResults>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AddLessonItemsSearchResults> = (args) => (
  <AddLessonItemsSearchResults {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAddLessonItemsSearchResultsProps.base,
} as IAddLessonItemsSearchResults;
