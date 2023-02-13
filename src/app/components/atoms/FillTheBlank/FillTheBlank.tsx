import { FocusEvent } from "react";
import {
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";

import { Box, TextField, Typography } from "@mui/material";

import { FillInBlankQuestionAnswer } from "../../../../domain/models/types/questionAnswers";
import { concatBlanks } from "../../../../util/functions/sessions";

export interface IFillTheBlank {
  questionAnswer: FillInBlankQuestionAnswer;
  register: UseFormRegister<FieldValues>;
  onFocus?: (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => void;
  displayAnswer: boolean;
  getValues: UseFormGetValues<FieldValues>;
}

const FillTheBlank: React.FC<IFillTheBlank> = ({
  questionAnswer,
  register,
  getValues,
  displayAnswer,
  onFocus,
}) => {
  let words = questionAnswer.answer.split(" ");

  function isCorrect(index: number) {
    if (
      concatBlanks(words, index, questionAnswer.blankIndexes) ===
      getValues(`${questionAnswer.id}-blank-${index}`).trim()
    ) {
      return true;
    } else return false;
  }

  return (
    <Box>
      <Box>
        <Typography variant="subtitle2">{questionAnswer.question}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          whiteSpace: "pre-wrap",
        }}
      >
        {words.map((word, i) => {
          // Merge neighbouring blanks into one
          if (
            0 < i &&
            questionAnswer.blankIndexes?.includes(i - 1) &&
            questionAnswer.blankIndexes?.includes(i)
          )
            return;

          if (questionAnswer.blankIndexes?.includes(i)) {
            return (
              <Box key={i}>
                <TextField
                  variant="outlined"
                  size="small"
                  sx={{
                    width: "4em",
                    borderRadius: 2,
                    "& .MuiInputBase-root.Mui-disabled .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: displayAnswer
                          ? isCorrect(i)
                            ? "success.main"
                            : "error.main"
                          : undefined,
                        borderWidth: 2,
                      },
                  }}
                  {...register(`${questionAnswer.id}-blank-${i}`, {
                    required: true,
                  })}
                  autoComplete="off"
                  inputProps={{ style: { paddingBottom: "8px" } }}
                  id={`${questionAnswer.id}-blank-${i}`}
                  onFocus={(e) => {
                    if (typeof onFocus === "function") onFocus(e);
                  }}
                  disabled={displayAnswer ? true : false}
                />

                <Typography variant="body1" paragraph={false} display="inline">
                  {" "}
                </Typography>
              </Box>
            );
          } else {
            return (
              <Box key={i}>
                <Typography variant="body1" paragraph={false} display="inline">
                  {word}
                </Typography>

                <Typography variant="body1" paragraph={false} display="inline">
                  {" "}
                </Typography>
              </Box>
            );
          }
        })}
      </Box>
    </Box>
  );
};

export default FillTheBlank;
