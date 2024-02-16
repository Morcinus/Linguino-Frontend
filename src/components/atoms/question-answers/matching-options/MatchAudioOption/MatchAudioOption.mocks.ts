import { action } from "@storybook/addon-actions";

import { IMatchAudioOption } from "./MatchAudioOption";

const base: IMatchAudioOption = {
  audioURL: "https://mocks.linguino.org/audio-short.mp3",
  animateWrong: false,
  disabled: false,
  onClick: action("onClick"),
  selected: false,
};

export const mockMatchAudioOptionProps = {
  base,
};
