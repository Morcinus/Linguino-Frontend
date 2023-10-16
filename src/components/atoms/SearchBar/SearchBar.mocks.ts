import { action } from "@storybook/addon-actions";

import { ISearchBar } from "./SearchBar";

const base: ISearchBar = {
  title: "Search vocabulary",
  value: "",
  onChange: action("onChange"),
  onSearchClick: action("onSearchClick"),
};

export const mockSearchBarProps = {
  base,
};
