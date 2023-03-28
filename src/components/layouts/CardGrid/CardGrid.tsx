import { ComponentProps, ElementType } from "react";

import { Box } from "@mui/material";

export interface ICardGrid {
  cards: Array<{
    component: ElementType;
    props: ComponentProps<ElementType>;
  }>;
  align?: "left" | "center";
}

const CardGrid: React.FC<ICardGrid> = ({ cards, align = "center" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: align,
      }}
    >
      {cards.map((card, i) => {
        const Card = card.component;
        return (
          <Box sx={{ m: 1 }} key={i}>
            <Card {...card.props} />
          </Box>
        );
      })}
    </Box>
  );
};

export default CardGrid;
