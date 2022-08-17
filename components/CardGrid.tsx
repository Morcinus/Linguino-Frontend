import React from "react";

import { Box } from "@mui/material";

import LessonCard, { LESSON_CARD_WIDTH, LessonCardProps } from "./LessonCard";

interface Props {
  cards: Array<LessonCardProps>;
}

export default function CardGrid({ cards }: Props) {
  return (
    <Box sx={{ justifyContent: "center", display: "flex" }}>
      <Box
        sx={{
          display: "inline-flex",
          flexWrap: "wrap",
          maxWidth: `${(16 + LESSON_CARD_WIDTH) * 6}px`, // (margin + width) * number_of_cards
          margin: "auto",
        }}
      >
        {cards.map((card) => {
          return (
            <Box sx={{ m: 1 }} key={card.id}>
              <LessonCard
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
