import { ComponentProps, ElementType } from "react";

import { Box } from "@mui/material";

export interface ICardGrid {
  cards: Array<{
    component: ElementType;
    props: ComponentProps<ElementType>;
  }>;
}

const CardGrid: React.FC<ICardGrid> = ({ cards }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
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
