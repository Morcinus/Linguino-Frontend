import { AnswerState } from "domain/models/types/exercises";

import { Button, Typography } from "@mui/material";

export interface IWordButton {
  onClick?: () => void;
  word?: string;
  disabled?: boolean;
  empty?: boolean;
  state?: AnswerState;
}

export const CHARACTER_BUTTON_SIZE = 35;

const WordButton: React.FC<IWordButton> = ({
  onClick,
  word,
  disabled,
  empty,
  state = "NONE",
}) => {
  return (
    <Button
      variant={"contained"}
      color={"neutral"}
      sx={{
        maxHeight: `${CHARACTER_BUTTON_SIZE}px`,
        minWidth: empty ? `5em` : undefined,
        minHeight: `${CHARACTER_BUTTON_SIZE}px`,
        borderRadius: 0.2,
        backgroundColor: "neutral",
        "&.Mui-disabled":
          state === "WRONG"
            ? {
                borderStyle: "solid",
                borderWidth: 2,
                borderColor: "error.main",
              }
            : undefined,
      }}
      onClick={onClick}
      disabled={disabled || empty}
    >
      <Typography variant="h6" sx={{ textTransform: "none" }}>
        {word}
      </Typography>
    </Button>
  );
};

export default WordButton;
