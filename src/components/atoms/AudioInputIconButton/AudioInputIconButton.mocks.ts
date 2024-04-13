import { action } from "@storybook/addon-actions";

import { IAudioInputIconButton } from "./AudioInputIconButton";

const base: IAudioInputIconButton = {
  onChange: action("onChange"),
  inputLanguage: "cs",
};

export const mockAudioInputIconButtonProps = {
  base,
};
