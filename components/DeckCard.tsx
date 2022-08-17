import React from "react";

import Link from "next/link";

import DoneIcon from "@mui/icons-material/Done";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";

export interface DeckCardProps {
  title: string;
  progress: number;
  id: string;
}

export const DECK_CARD_WIDTH = 143;

export default function DeckCard({ title, progress, id }: DeckCardProps) {
  return (
    <Card
      sx={{
        position: "relative",
        width: DECK_CARD_WIDTH,
        height: 200,
      }}
    >
      <Link href={`/deck/${id}`}>
        <CardActionArea
          sx={{
            position: "absolute",
            zIndex: 3,
            width: "100%",
            height: "100%",
            "&:after": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "64%",
              bottom: 0,
              background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
            },
          }}
        >
          <CardMedia
            sx={{
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
            image={`${process.env.NEXT_PUBLIC_STORAGE_BUCKET_URL} + ${id}`}
          />
          <Box
            sx={{
              position: "absolute",
              zIndex: 4,
              top: 0,
              right: 0,
              px: 1,
              py: 1,
            }}
          >
            {progress === 100 && (
              <DoneIcon
                sx={{
                  position: "absolute",
                  width: 22,
                  height: 22,
                  m: "5px",
                  color: "#40ff00",
                  stroke: "#40ff00",
                  strokeWidth: "1.5",
                }}
              />
            )}
            <CircularProgress
              size={32}
              value={progress}
              variant="determinate"
              sx={{
                color: progress === 100 ? "#40ff00" : "rgba(255,255,255,0.7)",
              }}
              thickness={5}
            ></CircularProgress>
          </Box>
          <Box
            sx={{
              position: "absolute",
              zIndex: 2,
              bottom: 0,
              pb: 1.5,
              px: 1.5,
            }}
          >
            <Typography variant="body2" sx={{ color: "white" }}>
              {title}
            </Typography>
          </Box>
        </CardActionArea>
      </Link>
    </Card>
  );
}
