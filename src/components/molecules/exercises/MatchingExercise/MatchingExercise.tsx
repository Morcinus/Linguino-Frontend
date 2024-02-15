import { useTranslation } from "i18n/client";
import {
  IExerciseComponent,
  MatchingExercise as MatchingExerciseType,
} from "infrastructure/api/user/courses/study-session/Exercises";
import { MatchingQuestionAnswer as MatchingQuestionAnswerType } from "infrastructure/api/user/courses/study-session/QuestionAnswers";
import { UserAnswer } from "infrastructure/api/user/courses/study-session/QuestionAttempt";

import Exercise from "components/atoms/Exercise/Exercise";
import MatchingQuestionAnswer from "components/atoms/question-answers/MatchingQuestionAnswer/MatchingQuestionAnswer";

export interface IMatchingExercise extends IExerciseComponent {
  exercise: MatchingExerciseType;
}

const MatchingExercise: React.FC<IMatchingExercise> = ({
  exercise,
  onContinue,
}) => {
  const { t } = useTranslation("cs", "common");
  const questionAnswer: MatchingQuestionAnswerType = {
    id: exercise.id,
    type: "MATCHING",
    options1: exercise.options1,
    options2: exercise.options2,
  };

  return (
    <Exercise
      submitBeforeContinue={false}
      assignmentTitle={t("exercises.matching.assignmentTitle")}
      onContinue={(arr: Array<UserAnswer>) => {
        onContinue?.(arr, false);
      }}
      questionAnswers={[questionAnswer]}
      questionAnswerComponents={[
        {
          component: MatchingQuestionAnswer,
          props: {
            questionAnswer: questionAnswer,
          },
        },
      ]}
    />
  );
};

export default MatchingExercise;
