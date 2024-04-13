import { ComponentMeta, ComponentStory } from "@storybook/react";

import SearchBar, { ISearchBar } from "./SearchBar";
import { mockSearchBarProps } from "./SearchBar.mocks";

export default {
  title: "atoms/SearchBar",
  component: SearchBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SearchBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSearchBarProps.base,
} as ISearchBar;
