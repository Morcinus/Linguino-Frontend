import { useTranslation } from "i18n/client";
import {
  FillInSentenceExercise as FillInSentenceExerciseType,
  IExerciseComponent,
} from "infrastructure/api/user/courses/study-session/Exercises";
import { FillInBlankQuestionAnswer as FillInBlankQuestionAnswerType } from "infrastructure/api/user/courses/study-session/QuestionAnswers";
import { UserAnswer } from "infrastructure/api/user/courses/study-session/QuestionAttempt";

import Exercise from "components/atoms/Exercise/Exercise";
import FillInBlankQuestionAnswer from "components/atoms/question-answers/FillInBlankQuestionAnswer/FillInBlankQuestionAnswer";

export interface IFillInSentenceExercise extends IExerciseComponent {
  exercise: FillInSentenceExerciseType;
}

const FillInSentenceExercise: React.FC<IFillInSentenceExercise> = ({
  exercise,
  onContinue,
}) => {
  const { t } = useTranslation("common");
  const questionAnswer: FillInBlankQuestionAnswerType = {
    id: exercise.id,
    type: "FILL_IN_BLANK",
    question: exercise.textL1,
    answer: exercise.textL2,
    blankIndexes: exercise.blankIndexes,
  };

  return (
    <Exercise
      assignmentTitle={t("exercises.fillInSentence.assignmentTitle")}
      onContinue={(arr: Array<UserAnswer>) => {
        onContinue?.(arr, false);
      }}
      imageURL={exercise.imageURL}
      questionAnswers={[questionAnswer]}
      questionAnswerComponents={[
        {
          component: FillInBlankQuestionAnswer,
          props: {
            questionAnswer: questionAnswer,
            options: exercise.options,
          },
        },
      ]}
    />
  );
};

export default FillInSentenceExercise;
