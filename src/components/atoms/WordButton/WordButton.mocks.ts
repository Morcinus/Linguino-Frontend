import { action } from "@storybook/addon-actions";

import { IWordButton } from "./WordButton";

const base: IWordButton = {
  onClick: action("onClick"),
  word: "'",
};

export const mockWordButtonProps = {
  base,
};
