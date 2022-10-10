import { useState } from "react";
import useKeypress from "react-use-keypress";

import { useTranslation } from "next-i18next";

import { Box, Button, Typography } from "@mui/material";

import {
  IExerciseComponent,
  SpeakingExercise,
} from "../../../../domain/models/types/exercises";
import CheckList from "../CheckList/CheckList";
import Timer from "../Timer/Timer";

export interface ISpeechExercise extends IExerciseComponent {
  exercise: SpeakingExercise;
}

const SpeechExercise: React.FC<ISpeechExercise> = ({
  exercise,
  onWrong,
  onContinue,
}) => {
  const [status, setStatus] = useState<"NONE" | "FINISHED">("NONE");
  const { t } = useTranslation("common");

  const handleContinue = () => {
    setStatus("NONE");
    onContinue();
  };

  useKeypress("Enter", (e: Event) => {
    e.preventDefault();
    handleContinue();
  });

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
          gap: 2,
          width: "90%",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {exercise.instructionTitle}
        </Typography>
        <Timer
          milliseconds={exercise.time}
          onFinish={() => setStatus("FINISHED")}
        />

        <CheckList items={exercise.questions.map((e) => e.question)} />

        <Box sx={{ mt: 4 }}>
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
  );
};

export default SpeechExercise;
