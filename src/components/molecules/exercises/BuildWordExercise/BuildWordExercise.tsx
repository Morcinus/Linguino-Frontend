import { UserAnswer } from "domain/models/types/questionAttempts";
import { useTranslation } from "i18n/client";
import {
  BuildWordExercise as BuildWordExerciseType,
  IExerciseComponent,
} from "infrastructure/api/user/study-session/Exercises";

import Exercise from "components/atoms/Exercise/Exercise";
import BuildWordQuestionAnswer from "components/atoms/question-answers/BuildWordQuestionAnswer/BuildWordQuestionAnswer";

export interface IBuildWordExercise extends IExerciseComponent {
  exercise: BuildWordExerciseType;
}

const BuildWordExercise: React.FC<IBuildWordExercise> = ({
  exercise,
  onContinue,
}) => {
  const { t } = useTranslation("cs", "common");

  return (
    <Exercise
      assignmentTitle={t("exercises.buildTheWord.assignmentTitle")}
      onContinue={(arr: Array<UserAnswer>) => {
        onContinue?.(arr, false);
      }}
      imageURL={exercise.imageURL}
      questionAnswers={[
        {
          type: "BUILD_WORD",
          id: exercise.id,
          question: exercise.wordL1,
          answer: exercise.wordL2,
          letters: exercise.letters,
        },
      ]}
      questionAnswerComponents={[
        {
          component: BuildWordQuestionAnswer,
          props: {
            questionAnswer: {
              type: "BUILD_WORD",
              id: exercise.id,
              question: exercise.wordL1,
              answer: exercise.wordL2,
              letters: exercise.letters,
            },
          },
        },
      ]}
    />
  );
};

export default BuildWordExercise;
