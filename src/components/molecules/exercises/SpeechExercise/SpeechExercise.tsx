import { useTranslation } from "i18n/client";

import useKeypress from "react-use-keypress";

import { Typography } from "@mui/material";

import { QuestionAttempt } from "../../../../domain/models/types/questionAttempts";
import {
  IExerciseComponent,
  SpeechExercise as SpeechExerciseType,
} from "../../../../infrastructure/api/user/study-session/Exercises";
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
  const { t } = useTranslation("cs", "common");

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
