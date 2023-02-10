import { useState } from "react";
import useKeypress from "react-use-keypress";

import { useTranslation } from "next-i18next";

import { Typography } from "@mui/material";

import {
  IExerciseComponent,
  SpeechExercise as SpeechExerciseType,
} from "../../../../domain/models/types/exercises";
import { QuestionAttempt } from "../../../../domain/models/types/questions";
import CheckList from "../CheckList/CheckList";
import FullWidthButton from "../FullWidthButton/FullWidthButton";
import Timer from "../Timer/Timer";

export interface ISpeechExercise extends IExerciseComponent {
  exercise: SpeechExerciseType;
}

const SpeechExercise: React.FC<ISpeechExercise> = ({
  exercise,
  onContinue,
}) => {
  const [status, setStatus] = useState<"NONE" | "FINISHED">("NONE");
  const { t } = useTranslation("common");

  const handleContinue = () => {
    setStatus("NONE");
    onContinue(getQuestionProgress(), false);
  };

  function getQuestionProgress(): QuestionAttempt[] {
    let arr: Array<QuestionAttempt> = [];

    exercise.questions.forEach((question) => {
      arr.push({ questionId: question.id, isCorrect: true });
    });

    return arr;
  }

  useKeypress("Enter", (e: Event) => {
    e.preventDefault();
    handleContinue();
  });

  return (
    <>
      <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
        {exercise.assignmentTitle}
      </Typography>
      <Timer
        milliseconds={exercise.time}
        onFinish={() => setStatus("FINISHED")}
      />

      <Typography variant="subtitle2">{t("exercise.topic")}:</Typography>
      <Typography variant="subtitle1">{exercise.assignmentTopic}</Typography>

      <CheckList items={exercise.questions.map((e) => e.question)} />

      <FullWidthButton text={t("exercise.continue")} onClick={handleContinue} />
    </>
  );
};

export default SpeechExercise;
