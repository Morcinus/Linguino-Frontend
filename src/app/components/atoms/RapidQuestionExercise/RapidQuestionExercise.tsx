import { useEffect, useState } from "react";
import useKeypress from "react-use-keypress";

import { useTranslation } from "next-i18next";

import { Box, Button, Typography } from "@mui/material";

import {
  IExerciseComponent,
  RapidQuestionExercise as RapidQuestionExerciseType,
} from "../../../../domain/models/types/exercises";
import ListenButton from "../ListenButton/ListenButton";

export interface IRapidQuestionExercise extends IExerciseComponent {
  exercise: RapidQuestionExerciseType;
}

const RapidQuestionExercise: React.FC<IRapidQuestionExercise> = ({
  exercise,
  onWrong,
  onContinue,
}) => {
  const TIMEOUT = 2000;

  const { t } = useTranslation("common");
  const [status, setStatus] = useState<"NONE" | "FINISHED">("NONE");
  const [timeout, setTime] = useState<NodeJS.Timeout>();

  const handleContinue = () => {
    setStatus("NONE");
    onContinue();
  };

  useKeypress("Enter", (e: Event) => {
    e.preventDefault();
    if (status === "FINISHED") handleContinue();
  });

  const handleFinish = () => {
    setTime(
      setTimeout(() => {
        setStatus("FINISHED");
      }, TIMEOUT)
    );
  };

  useEffect(() => {
    if (status === "FINISHED") clearTimeout(timeout);
  }, [status]);

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
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {exercise.instructionTitle}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <ListenButton
            audioLink={exercise.audioLink}
            displayProgress={false}
            playOnMount={true}
            onFinish={handleFinish}
          />
          <Box>
            <Button
              onClick={handleContinue}
              variant="contained"
              disabled={status === "FINISHED" ? false : true}
            >
              {t("exercise.continue")}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RapidQuestionExercise;
