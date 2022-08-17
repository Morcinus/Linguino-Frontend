import React from "react";

import { Box } from "@mui/material";

import DeckCard, { DECK_CARD_WIDTH, DeckCardProps } from "./DeckCard";

interface Props {
  cards: Array<DeckCardProps>;
}

export default function CardGrid({ cards }: Props) {
  return (
    <Box sx={{ justifyContent: "center", display: "flex" }}>
      <Box
        sx={{
          display: "inline-flex",
          flexWrap: "wrap",
          maxWidth: `${(16 + DECK_CARD_WIDTH) * 6}px`, // (margin + width) * number_of_cards
          margin: "auto",
        }}
      >
        {cards.map((card) => {
          return (
            <Box sx={{ m: 1 }} key={card.id}>
              <DeckCard
                title={card.title}
                id={card.id}
                progress={card.progress}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
