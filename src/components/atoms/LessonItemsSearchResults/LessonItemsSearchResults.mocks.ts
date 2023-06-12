import { action } from "@storybook/addon-actions";

import { ILessonItemsSearchResults } from "./LessonItemsSearchResults";

const base: ILessonItemsSearchResults = {
  searchPrompt: "avocado",
  onItemAdd: action("onItemAdd"),
  onItemRemove: action("onItemRemove"),
  items: [
    {
      nameL1: "avokádo",
      nameL2: "avocado",
      id: "123",
    },
  ],
};

export const mockLessonItemsSearchResultsProps = {
  base,
};
