import { action } from "@storybook/addon-actions";

import SimpleCard from "components/atoms/cards/SimpleCard/SimpleCard";

import { ICardGrid } from "./CardGrid";

const base: ICardGrid = {
  cards: Array.from(Array(10).keys()).map((index) => {
    return {
      component: SimpleCard,
      props: {
        header: `Card ${index}`,
        imageUrl: "https://picsum.photos/id/168/512/512",
        onClick: action(`onClick card ${index}`),
      },
    };
  }),
};

export const mockCardGridProps = {
  base,
};
