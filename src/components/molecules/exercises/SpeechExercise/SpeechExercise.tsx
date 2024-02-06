import { useTranslation } from "i18n/client";

import useKeypress from "react-use-keypress";

import Typography from "@mui/material/Typography";

import {
  IExerciseComponent,
  SpeechExercise as SpeechExerciseType,
} from "../../../../infrastructure/api/user/study-session/Exercises";
import { QuestionAttempt } from "../../../../infrastructure/api/user/study-session/QuestionAttempt";
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

    exercise.questionsL2.forEach((question, i) => {
      arr.push({
        exerciseId: i.toString(),
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
        {t("exercises.speech.assignmentTitle")}
      </Typography>
      <Timer milliseconds={exercise.timeMs} />

      <Typography variant="subtitle2">{t("exercise.topic")}:</Typography>
      <Typography variant="subtitle1">{exercise.assignmentTopicL2}</Typography>

      <CheckList items={exercise.questionsL2} />

      <FullWidthButton onClick={handleContinue}>
        {t("exercise.continue")}
      </FullWidthButton>
    </>
  );
};

export default SpeechExercise;
