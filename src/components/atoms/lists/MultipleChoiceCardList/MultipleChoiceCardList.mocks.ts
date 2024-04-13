import { action } from "@storybook/addon-actions";

import { IMultipleChoiceCardList } from "./MultipleChoiceCardList";

const base: IMultipleChoiceCardList = {
  onChange: action("onChange"),
  selectedIndex: 2,
  choices: [
    {
      name: "Lorem ipsum 1",
    },
    {
      name: "Lorem ipsum 2",
    },
    {
      name: "Lorem ipsum 3",
    },
  ],
};

export const mockMultipleChoiceCardListProps = {
  base,
};
