import { action } from "@storybook/addon-actions";

import { IMatchTextOption } from "./MatchTextOption";

const base: IMatchTextOption = {
  text: "Lorem ipsum",
  animateWrong: false,
  disabled: false,
  onClick: action("onClick"),
  selected: false,
};

export const mockMatchTextOptionProps = {
  base,
};
