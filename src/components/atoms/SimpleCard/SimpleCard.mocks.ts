import { action } from "@storybook/addon-actions";
import icons from "styles/icons";

import { ISimpleCard } from "./SimpleCard";

const base: ISimpleCard = {
  header: "9999",
  headerIcon: icons.coins,
  imageURL: "https://picsum.photos/id/168/512/512",
  onClick: action("onClick"),
};

export const mockSimpleCardProps = {
  base,
};
