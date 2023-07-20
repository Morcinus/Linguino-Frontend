import { action } from "@storybook/addon-actions";

import { IMatchImageOption } from "./MatchImageOption";

const base: IMatchImageOption = {
  imageURL: "https://picsum.photos/id/10/512/512",
  animateWrong: false,
  disabled: false,
  onClick: action("onClick"),
  selected: false,
};

export const mockMatchImageOptionProps = {
  base,
};
