import { MutableRefObject } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { InputAdornment, TextField } from "@mui/material";

import { AnswerState } from "../../../../domain/models/types/exercises";
import useAuth from "../../../../infrastructure/services/AuthProvider";
import AudioInputIconButton from "../AudioInputIconButton/AudioInputIconButton";

export interface ITextAnswer {
  inputRef?: MutableRefObject<any>;
  variant?: "short" | "long";
  disabled?: boolean;
  correctAnswer?: string;
  answerState: AnswerState;
  registration?: UseFormRegisterReturn;
  enableAudioInput?: boolean;
  onAudioInputChange?: (text: string) => void;
}

const TextAnswer: React.FC<ITextAnswer> = ({
  inputRef,
  variant = "short",
  disabled,
  answerState,
  registration,
  enableAudioInput,
  onAudioInputChange,
}) => {
  const { user } = useAuth();

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
      InputProps={{
        endAdornment:
          enableAudioInput && user ? (
            <InputAdornment position="end">
              <AudioInputIconButton
                onChange={(text) => onAudioInputChange?.(text)}
                inputLanguage={user.selectedCourse.language2}
              />
            </InputAdornment>
          ) : undefined,
      }}
    />
  );
};

export default TextAnswer;
