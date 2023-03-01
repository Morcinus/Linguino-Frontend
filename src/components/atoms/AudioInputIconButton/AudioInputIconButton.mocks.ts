import { IAudioInputIconButton } from "./AudioInputIconButton";

const base: IAudioInputIconButton = {
  onChange: (text: string) => console.log(`Input changed: ${text}`),
  inputLanguage: "cs",
};

export const mockAudioInputIconButtonProps = {
  base,
};
