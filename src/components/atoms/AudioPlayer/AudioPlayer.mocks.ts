import { IAudioPlayer } from "./AudioPlayer";

const base: IAudioPlayer = {
  audioLink: "https://samplelib.com/lib/preview/mp3/sample-12s.mp3",
  playOnMount: false,
};

export const mockAudioPlayerProps = {
  base,
};
