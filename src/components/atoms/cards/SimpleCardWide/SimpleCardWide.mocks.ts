import { action } from "@storybook/addon-actions";

import { ISimpleCardWide } from "./SimpleCardWide";

const base: ISimpleCardWide = {
  header: "Lorem ipsum",
  imageUrl: "https://picsum.photos/id/168/512/512",
  subheader: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  onClick: action("onClick"),
};

export const mockSimpleCardWideProps = {
  base,
};
