import { IKeyPress } from "./KeyPress";

const base: IKeyPress = {
  onPress: () => console.log("onPress"),
  keys: ["Enter"],
};

export const mockKeyPressProps = {
  base,
};
