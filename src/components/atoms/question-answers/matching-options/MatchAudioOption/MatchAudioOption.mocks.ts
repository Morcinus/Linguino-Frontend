import { action } from "@storybook/addon-actions";

import { IMatchAudioOption } from "./MatchAudioOption";

const base: IMatchAudioOption = {
  audioURL:
    "https://www.chosic.com/wp-content/uploads/2021/02/Monkeys-Spinning-Monkeys.mp3",
  animateWrong: false,
  disabled: false,
  onClick: action("onClick"),
  selected: false,
};

export const mockMatchAudioOptionProps = {
  base,
};
