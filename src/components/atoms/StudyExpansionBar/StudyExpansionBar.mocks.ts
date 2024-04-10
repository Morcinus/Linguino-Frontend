import { action } from "@storybook/addon-actions";

import { IStudyExpansionBar } from "./StudyExpansionBar";

const opened: IStudyExpansionBar = {
  onClick: action("onClick"),
  open: true,
};

const closed: IStudyExpansionBar = {
  onClick: action("onClick"),
  open: false,
};

export const mockStudyExpansionBarProps = {
  opened,
  closed,
};
