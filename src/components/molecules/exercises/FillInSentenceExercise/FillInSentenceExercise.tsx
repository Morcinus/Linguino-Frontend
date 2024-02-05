import { UserAnswer } from "domain/models/types/questionAttempts";
import {
  FillInSentenceExercise as FillInSentenceExerciseType,
  IExerciseComponent,
} from "infrastructure/api/user/study-session/Exercises";

import Exercise from "components/atoms/Exercise/Exercise";
import FillInBlankQuestionAnswer from "components/atoms/question-answers/FillInBlankQuestionAnswer/FillInBlankQuestionAnswer";

export interface IFillInSentenceExercise extends IExerciseComponent {
  exercise: FillInSentenceExerciseType;
}

const FillInSentenceExercise: React.FC<IFillInSentenceExercise> = ({
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
          component: FillInBlankQuestionAnswer,
          props: {
            questionAnswer: exercise.question,
            options: exercise.options,
          },
        },
      ]}
    />
  );
};

export default FillInSentenceExercise;
