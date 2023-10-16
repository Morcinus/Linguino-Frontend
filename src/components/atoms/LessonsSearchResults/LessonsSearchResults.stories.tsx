import { ComponentMeta, ComponentStory } from "@storybook/react";

import LessonsSearchResults, {
  ILessonsSearchResults,
} from "./LessonsSearchResults";
import { mockLessonsSearchResultsProps } from "./LessonsSearchResults.mocks";

export default {
  title: "atoms/LessonsSearchResults",
  component: LessonsSearchResults,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LessonsSearchResults>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LessonsSearchResults> = (args) => (
  <LessonsSearchResults {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLessonsSearchResultsProps.base,
} as ILessonsSearchResults;
