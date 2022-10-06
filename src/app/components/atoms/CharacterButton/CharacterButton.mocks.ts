import { ICharacterButton } from "./CharacterButton";

const base: ICharacterButton = {
  onClick: () => {
    console.log("Click");
  },
  character: "'",
};

export const mockCharacterButtonProps = {
  base,
};
