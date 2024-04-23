import { IAudioPlayer } from "./AudioPlayer";

const base: IAudioPlayer = {
  audioLink: "https://mocks.linguino.org/audio-long.mp3",
  playOnMount: false,
};

export const mockAudioPlayerProps = {
  base,
};
