import { IWordButton } from "./WordButton";

const base: IWordButton = {
  onClick: () => {
    console.log("Click");
  },
  word: "'",
};

export const mockWordButtonProps = {
  base,
};
