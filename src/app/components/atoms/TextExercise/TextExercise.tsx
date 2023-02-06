import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useKeypress from "react-use-keypress";

import { useTranslation } from "next-i18next";

import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";

import {
  AnswerState,
  IExerciseComponent,
  TextExercise as TextExerciseType,
} from "../../../../domain/models/types/exercises";
import { useFocus } from "../../../hooks/useFocus";
import CharacterButton from "../CharacterButton/CharacterButton";
import TextAnswer from "../TextAnswer/TextAnswer";

export interface ITextExercise extends IExerciseComponent {
  variant: "short" | "long";
  exercise: TextExerciseType;
}

const TextExercise: React.FC<ITextExercise> = ({
  exercise,
  onContinue,
  variant,
}) => {
  const { t } = useTranslation("common");
  const [submitted, setSubmitted] = useState(false);
  const [answerState, setAnswerState] = useState<AnswerState>("NONE");
  const [inputRef, setInputFocus] = useFocus();
  const { register, handleSubmit, reset, setValue, getValues } = useForm<{
    answer: string;
  }>({
    defaultValues: { answer: "" },
  });

  const onCheckSubmit = (data: { answer: string }) => {
    setSubmitted(true);
    if (data.answer.trim() === exercise.questions[0].answer) {
      setAnswerState("RIGHT");
    } else {
      setAnswerState("WRONG");
    }
  };

  const handleContinue = () => {
    setSubmitted(false);
    setAnswerState("NONE");
    onContinue(
      [
        {
          questionId: exercise.questions[0].id,
          isCorrect: answerState === "RIGHT" ? true : false,
        },
      ],
      answerState === "RIGHT" ? false : true
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
          <TextAnswer
            inputRef={inputRef}
            variant={variant}
            correctAnswer={exercise.questions[0].answer}
            disabled={submitted}
            registration={register("answer", {
              required: true,
            })}
            answerState={answerState}
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
                    answerState === "RIGHT"
                      ? "green"
                      : answerState === "WRONG"
                      ? `red`
                      : undefined,
                }}
              >
                {answerState === "RIGHT"
                  ? t("exercise.right")
                  : answerState === "WRONG"
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
                  answerState === "RIGHT"
                    ? "success"
                    : answerState === "WRONG"
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
