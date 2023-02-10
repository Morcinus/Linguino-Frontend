import { MutableRefObject } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { TextField } from "@mui/material";

import { AnswerState } from "../../../../domain/models/types/exercises";

export interface ITextAnswer {
  inputRef?: MutableRefObject<any>;
  variant?: "short" | "long";
  disabled?: boolean;
  correctAnswer?: string;
  answerState: AnswerState;
  registration?: UseFormRegisterReturn;
}

const TextAnswer: React.FC<ITextAnswer> = ({
  inputRef,
  variant = "short",
  disabled,
  answerState,
  registration,
}) => {
  return (
    <TextField
      inputRef={inputRef}
      variant="outlined"
      multiline={variant === "long" ? true : false}
      rows={variant === "long" ? 3 : 1}
      fullWidth
      sx={{
        borderRadius: 2,
        "& .MuiInputBase-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
          borderColor:
            answerState === "RIGHT"
              ? "green"
              : answerState === "WRONG"
              ? "red"
              : undefined,
          borderWidth: 2,
        },
      }}
      autoComplete="off"
      disabled={disabled}
      color={
        answerState === "RIGHT"
          ? "success"
          : answerState === "WRONG"
          ? "error"
          : undefined
      }
      focused={
        answerState === "RIGHT" || answerState === "WRONG" ? true : false
      }
      {...registration}
    />
  );
};

export default TextAnswer;
