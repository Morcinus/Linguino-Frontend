import { IListenButton } from "./ListenButton";

const base: IListenButton = {
  audioLink: "https://samplelib.com/lib/preview/mp3/sample-12s.mp3",
  displayProgress: true,
  playOnMount: false,
};

export const mockListenButtonProps = {
  base,
};
