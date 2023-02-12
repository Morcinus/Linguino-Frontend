import { IAudioPlayer } from "./AudioPlayer";

const base: IAudioPlayer = {
  audioLink: "https://samplelib.com/lib/preview/mp3/sample-12s.mp3",
  playOnMount: false,
  imageURL: "https://picsum.photos/id/168/512/512",
};

export const mockAudioPlayerProps = {
  base,
};
