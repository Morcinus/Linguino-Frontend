import { FocusEvent } from "react";
import {
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";

import { Box, TextField, Typography } from "@mui/material";

import { concatBlanks } from "../../../../util/functions/sessions";

export interface IFillTheBlank {
  sentence: string;
  blankIndexes?: Array<number>;
  register: UseFormRegister<FieldValues>;
  onFocus?: (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => void;
  displayAnswer: boolean;
  getValues: UseFormGetValues<FieldValues>;
  id: string;
}

const FillTheBlank: React.FC<IFillTheBlank> = ({
  sentence,
  blankIndexes,
  register,
  getValues,
  displayAnswer,
  onFocus,
  id,
}) => {
  let words = sentence.split(" ");

  function isCorrect(index: number) {
    if (
      concatBlanks(words, index, blankIndexes) ===
      getValues(`${id}-blank-${index}`).trim()
    ) {
      return true;
    } else return false;
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", whiteSpace: "pre-wrap" }}>
      {words.map((word, i) => {
        // Merge neighbouring blanks into one
        if (0 < i && blankIndexes?.includes(i - 1) && blankIndexes?.includes(i))
          return;

        if (blankIndexes?.includes(i)) {
          return (
            <Box key={i}>
              <TextField
                variant="outlined"
                size="small"
                sx={{
                  width: "8em",
                  borderRadius: 2,
                  "& .MuiInputBase-root.Mui-disabled .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: displayAnswer
                        ? isCorrect(i)
                          ? undefined
                          : "red"
                        : undefined,
                      borderWidth: 2,
                    },
                }}
                {...register(`${id}-blank-${i}`, {
                  required: true,
                })}
                autoComplete="off"
                inputProps={{ style: { paddingBottom: "8px" } }}
                id={`${id}-blank-${i}`}
                onFocus={(e) => {
                  if (typeof onFocus === "function") onFocus(e);
                }}
                disabled={displayAnswer ? true : false}
              />

              <Typography variant="h5" paragraph={false} display="inline">
                {" "}
              </Typography>
            </Box>
          );
        } else {
          return (
            <Box key={i}>
              <Typography variant="h5" paragraph={false} display="inline">
                {word}
              </Typography>

              <Typography variant="h5" paragraph={false} display="inline">
                {" "}
              </Typography>
            </Box>
          );
        }
      })}
    </Box>
  );
};

export default FillTheBlank;
