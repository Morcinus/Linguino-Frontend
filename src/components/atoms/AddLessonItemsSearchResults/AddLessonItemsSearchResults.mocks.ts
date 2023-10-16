import { action } from "@storybook/addon-actions";

import { IAddLessonItemsSearchResults } from "./AddLessonItemsSearchResults";

const base: IAddLessonItemsSearchResults = {
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

export const mockAddLessonItemsSearchResultsProps = {
  base,
};
