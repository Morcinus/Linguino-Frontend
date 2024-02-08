import { action } from "@storybook/addon-actions";

import { ISimpleCard } from "./SimpleCard";

const base: ISimpleCard = {
  header: "9999",
  headerEmoji: "🪙",
  imageURL: "https://picsum.photos/id/168/512/512",
  onClick: action("onClick"),
};

export const mockSimpleCardProps = {
  base,
};
