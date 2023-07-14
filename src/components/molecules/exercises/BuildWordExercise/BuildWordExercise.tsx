import {
  BuildWordExercise as BuildWordExerciseType,
  IExerciseComponent,
} from "domain/models/types/exercises";
import { UserAnswer } from "domain/models/types/questionAttempts";

import BuildWordQuestionAnswer from "components/atoms/BuildWordQuestionAnswer/BuildWordQuestionAnswer";
import Exercise from "components/atoms/Exercise/Exercise";

export interface IBuildWordExercise extends IExerciseComponent {
  exercise: BuildWordExerciseType;
}

const BuildWordExercise: React.FC<IBuildWordExercise> = ({
  exercise,
  onContinue,
}) => {
  return (
    <Exercise
      assignmentTitle={exercise.assignmentTitle}
      onContinue={(arr: Array<UserAnswer>) => {
        onContinue?.(arr, false);
      }}
      imageURL={exercise.imageURL}
      questionAnswers={[exercise.question]}
      questionAnswerComponents={[
        {
          component: BuildWordQuestionAnswer,
          props: {
            questionAnswer: exercise.question,
          },
        },
      ]}
    />
  );
};

export default BuildWordExercise;
