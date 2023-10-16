import { ComponentMeta, ComponentStory } from "@storybook/react";

import UserSearchResults, { IUserSearchResults } from "./UserSearchResults";
import { mockUserSearchResultsProps } from "./UserSearchResults.mocks";

export default {
  title: "atoms/UserSearchResults",
  component: UserSearchResults,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof UserSearchResults>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserSearchResults> = (args) => (
  <UserSearchResults {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockUserSearchResultsProps.base,
} as IUserSearchResults;
