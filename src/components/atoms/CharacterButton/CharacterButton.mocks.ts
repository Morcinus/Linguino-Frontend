import { action } from "@storybook/addon-actions";

import { ICharacterButton } from "./CharacterButton";

const base: ICharacterButton = {
  onClick: action("onClick"),
  character: "'",
};

export const mockCharacterButtonProps = {
  base,
};
