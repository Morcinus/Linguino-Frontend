import { useTranslation } from "i18n/client";
import { TextQuestionAnswer as TextQuestionAnswerType } from "infrastructure/api/user/courses/study-session/QuestionAnswers";

import { Box } from "@mui/material";

import {
  IExerciseComponent,
  ShortListeningExercise as ShortListeningExerciseType,
} from "../../../../infrastructure/api/user/courses/study-session/Exercises";
import { UserAnswer } from "../../../../infrastructure/api/user/courses/study-session/QuestionAttempt";
import Exercise from "../../../atoms/Exercise/Exercise";
import ListenButton from "../../../atoms/ListenButton/ListenButton";
import TextQuestionAnswer from "../../../atoms/question-answers/TextQuestionAnswer/TextQuestionAnswer";

export interface IShortListeningExercise extends IExerciseComponent {
  exercise: ShortListeningExerciseType;
}

const ShortListeningExercise: React.FC<IShortListeningExercise> = ({
  exercise,
  onContinue,
}) => {
  const { t } = useTranslation("common");
  const questionAnswer: TextQuestionAnswerType = {
    type: "TEXT",
    id: exercise.id,
    question: "",
    answer: exercise.textL2,
  };

  return (
    <Exercise
      assignmentTitle={t("exercises.shortListening.assignmentTitle")}
      onContinue={(arr: Array<UserAnswer>) => {
        onContinue?.(arr, false);
      }}
      questionAnswers={[questionAnswer]}
      questionAnswerComponents={[
        {
          component: TextQuestionAnswer,
          props: {
            questionAnswer: questionAnswer,
            characterButtons: ["'"],
          },
        },
      ]}
      componentsAboveQuestions={
        <Box sx={{ mb: 4 }}>
          <ListenButton
            audioLink={exercise.textL2AudioURL}
            playOnMount={true}
          />
        </Box>
      }
    />
  );
};

export default ShortListeningExercise;
