import {
  IExerciseComponent,
  ReadAloudExercise as ReadAloudExerciseType,
} from "../../../../domain/models/types/exercises";
import { UserAnswer } from "../../../../domain/models/types/questionAttempts";
import AudioQuestionAnswer from "../../../atoms/AudioQuestionAnswer/AudioQuestionAnswer";
import Exercise from "../../../atoms/Exercise/Exercise";

export interface IReadAloudExercise extends IExerciseComponent {
  exercise: ReadAloudExerciseType;
}

const ReadAloudExercise: React.FC<IReadAloudExercise> = ({
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
          component: AudioQuestionAnswer,
          props: {
            questionAnswer: exercise.question,
          },
        },
      ]}
      submitBeforeContinue={false}
    />
  );
};

export default ReadAloudExercise;
