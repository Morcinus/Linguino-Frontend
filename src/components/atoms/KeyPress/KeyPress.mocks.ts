import { action } from "@storybook/addon-actions";

import { IKeyPress } from "./KeyPress";

const base: IKeyPress = {
  onPress: action("onPress"),
  keys: ["Enter"],
};

export const mockKeyPressProps = {
  base,
};
