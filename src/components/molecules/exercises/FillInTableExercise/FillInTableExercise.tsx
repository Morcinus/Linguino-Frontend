import {
  FillInTableExercise as FillInTableExerciseType,
  IExerciseComponent,
} from "domain/models/types/exercises";
import { UserAnswer } from "domain/models/types/questionAttempts";

import Exercise from "components/atoms/Exercise/Exercise";
import TableQuestionAnswer from "components/atoms/question-answers/TableQuestionAnswer/TableQuestionAnswer";

export interface IFillInTableExercise extends IExerciseComponent {
  exercise: FillInTableExerciseType;
}

const FillInTableExercise: React.FC<IFillInTableExercise> = ({
  exercise,
  onContinue,
}) => {
  return (
    <Exercise
      assignmentTitle={exercise.assignmentTitle}
      onContinue={(arr: Array<UserAnswer>) => {
        onContinue?.(arr, false);
      }}
      questionAnswers={[exercise.question]}
      questionAnswerComponents={[
        {
          component: TableQuestionAnswer,
          props: {
            questionAnswer: exercise.question,
            characterButtons: ["'"],
          },
        },
      ]}
    />
  );
};

export default FillInTableExercise;
