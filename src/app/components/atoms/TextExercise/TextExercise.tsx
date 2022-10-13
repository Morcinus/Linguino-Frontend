import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useKeypress from "react-use-keypress";

import { useTranslation } from "next-i18next";

import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import {
  IExerciseComponent,
  TextExercise as TextExerciseType,
} from "../../../../domain/models/types/exercises";
import { useFocus } from "../../../hooks/useFocus";
import CharacterButton from "../CharacterButton/CharacterButton";

export interface ITextExercise extends IExerciseComponent {
  variant: "short" | "long" | "fillInTheBlank";
  exercise: TextExerciseType;
}

const TextExercise: React.FC<ITextExercise> = ({
  exercise,
  onContinue,
  variant,
}) => {
  const { t } = useTranslation("common");
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"NONE" | "RIGHT" | "WRONG">("NONE");
  const [inputRef, setInputFocus] = useFocus();
  const { register, handleSubmit, reset, setValue, getValues } = useForm<{
    answer: string;
  }>({
    defaultValues: { answer: "" },
  });

  const onCheckSubmit = (data: { answer: string }) => {
    setSubmitted(true);
    if (data.answer.trim() === exercise.questions[0].answer) {
      setStatus("RIGHT");
    } else {
      setStatus("WRONG");
    }
  };

  const handleContinue = () => {
    setSubmitted(false);
    setStatus("NONE");
    onContinue(
      [
        {
          questionId: exercise.questions[0].id,
          isCorrect: status === "RIGHT" ? true : false,
        },
      ],
      status === "RIGHT" ? false : true
    );
    reset({ answer: "" });
  };

  useEffect(() => {
    setInputFocus();
  });

  useKeypress("Enter", (e: Event) => {
    e.preventDefault();
    if (!submitted) handleSubmit(onCheckSubmit)();
    else handleContinue();
  });

  const handleAddCharacter = () => {
    setValue("answer", getValues().answer + "'");
    setInputFocus();
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          width: "90%",
        }}
      >
        <Box sx={{ justifyContent: "center", display: "flex" }}>
          <Card
            sx={{ width: "100%", maxWidth: "250px", aspectRatio: "1/1", my: 2 }}
          >
            <CardMedia
              sx={{
                width: "100%",
                height: "100%",
                zIndex: 0,
              }}
              image={`${process.env.NEXT_PUBLIC_STORAGE_BUCKET_URL} + ${exercise.id}`}
            />
          </Card>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {exercise.instructionTitle}
        </Typography>
        <Typography variant="h5" sx={{ mt: 0.5, mb: 2 }}>
          {exercise.questions[0].question}
        </Typography>

        <Box sx={{ justifyContent: "center", display: "flex" }}>
          <TextField
            inputRef={inputRef}
            variant="outlined"
            multiline={variant === "long" ? true : false}
            rows={variant === "long" ? 3 : 1}
            sx={{
              width: variant === "long" ? "100%" : undefined,
              my: 2,
              borderRadius: 2,
              "& .MuiInputBase-root.Mui-disabled .MuiOutlinedInput-notchedOutline":
                {
                  borderColor:
                    status === "RIGHT"
                      ? "green"
                      : status === "WRONG"
                      ? "red"
                      : undefined,
                  borderWidth: 2,
                },
            }}
            autoComplete="off"
            {...register("answer", {
              required: true,
            })}
            disabled={submitted ? true : false}
            color={
              status === "RIGHT"
                ? "success"
                : status === "WRONG"
                ? "error"
                : undefined
            }
            focused={status === "RIGHT" || status === "WRONG" ? true : false}
            helperText={
              <Typography variant="body1" component="span">
                {status === "WRONG" &&
                  `${t("exercise.correctAnswer")} ${
                    exercise.questions[0].answer
                  }`}
              </Typography>
            }
          />
        </Box>
        <Box>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={3} sx={{ textAlign: "left" }}>
              <CharacterButton onClick={handleAddCharacter} character="'" />
            </Grid>

            <Grid item xs={6}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color:
                    status === "RIGHT"
                      ? "green"
                      : status === "WRONG"
                      ? `red`
                      : undefined,
                }}
              >
                {status === "RIGHT"
                  ? t("exercise.right")
                  : status === "WRONG"
                  ? t("exercise.wrong")
                  : ""}
              </Typography>
            </Grid>
            <Grid item xs={3} sx={{ textAlign: "RIGHT" }}>
              <Button
                onClick={
                  !submitted ? handleSubmit(onCheckSubmit) : handleContinue
                }
                variant="contained"
                color={
                  status === "RIGHT"
                    ? "success"
                    : status === "WRONG"
                    ? "error"
                    : "primary"
                }
              >
                {submitted ? t("exercise.continue") : t("exercise.check")}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default TextExercise;
