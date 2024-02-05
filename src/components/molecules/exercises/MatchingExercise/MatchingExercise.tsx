import { UserAnswer } from "domain/models/types/questionAttempts";
import {
  IExerciseComponent,
  MatchingExercise as MatchingExerciseType,
} from "infrastructure/api/user/study-session/Exercises";

import Exercise from "components/atoms/Exercise/Exercise";
import MatchingQuestionAnswer from "components/atoms/question-answers/MatchingQuestionAnswer/MatchingQuestionAnswer";

export interface IMatchingExercise extends IExerciseComponent {
  exercise: MatchingExerciseType;
}

const MatchingExercise: React.FC<IMatchingExercise> = ({
  exercise,
  onContinue,
}) => {
  return (
    <Exercise
      submitBeforeContinue={false}
      assignmentTitle={exercise.assignmentTitle}
      onContinue={(arr: Array<UserAnswer>) => {
        onContinue?.(arr, false);
      }}
      questionAnswers={[exercise.question]}
      questionAnswerComponents={[
        {
          component: MatchingQuestionAnswer,
          props: {
            questionAnswer: exercise.question,
          },
        },
      ]}
    />
  );
};

export default MatchingExercise;
