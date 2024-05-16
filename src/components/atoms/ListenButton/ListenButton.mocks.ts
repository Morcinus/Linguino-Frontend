import { IListenButton } from "./ListenButton";

const base: IListenButton = {
  audioLink: "https://mocks.linguino.org/audio-short.mp3",
  displayProgress: true,
  playOnMount: false,
};

export const mockListenButtonProps = {
  base,
};
