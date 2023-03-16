import useKeypress from "react-use-keypress";

import { useTranslation } from "next-i18next";

import { Typography } from "@mui/material";

import {
  IExerciseComponent,
  SpeechExercise as SpeechExerciseType,
} from "../../../../domain/models/types/exercises";
import { QuestionAttempt } from "../../../../domain/models/types/questionAttempts";
import FullWidthButton from "../../../atoms/FullWidthButton/FullWidthButton";
import Timer from "../../../atoms/Timer/Timer";
import CheckList from "../../../atoms/lists/CheckList/CheckList";

export interface ISpeechExercise extends IExerciseComponent {
  exercise: SpeechExerciseType;
}

const SpeechExercise: React.FC<ISpeechExercise> = ({
  exercise,
  onContinue,
}) => {
  const { t } = useTranslation("common");

  const handleContinue = () => {
    onContinue?.(getQuestionProgress(), false);
  };

  function getQuestionProgress(): QuestionAttempt[] {
    const arr: Array<QuestionAttempt> = [];

    exercise.questions.forEach((question) => {
      arr.push({
        questionAnswerId: question.id,
        states: ["RIGHT"],
        answers: [],
      });
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
      <Timer milliseconds={exercise.time} />

      <Typography variant="subtitle2">{t("exercise.topic")}:</Typography>
      <Typography variant="subtitle1">{exercise.assignmentTopic}</Typography>

      <CheckList items={exercise.questions.map((e) => e.question)} />

      <FullWidthButton onClick={handleContinue}>
        {t("exercise.continue")}
      </FullWidthButton>
    </>
  );
};

export default SpeechExercise;
