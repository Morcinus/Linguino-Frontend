import {
  IExerciseComponent,
  ShortListeningExercise as ShortListeningExerciseType,
} from "../../../../../domain/models/types/exercises";
import { UserAnswer } from "../../../../../domain/models/types/questionAttempts";
import Exercise from "../../../atoms/Exercise/Exercise";
import ListenButton from "../../../atoms/ListenButton/ListenButton";
import TextQuestionAnswer from "../../../atoms/TextQuestionAnswer/TextQuestionAnswer";

export interface IShortListeningExercise extends IExerciseComponent {
  exercise: ShortListeningExerciseType;
}

const ShortListeningExercise: React.FC<IShortListeningExercise> = ({
  exercise,
  onContinue,
}) => {
  return (
    <Exercise
      assignmentTitle={exercise.assignmentTitle}
      onContinue={(arr: Array<UserAnswer>) => {
        onContinue(arr, false);
      }}
      imageURL={exercise.imageURL}
      questionAnswers={[exercise.question]}
      questionAnswerComponents={[
        {
          component: TextQuestionAnswer,
          props: {
            questionAnswer: exercise.question,
          },
        },
      ]}
      componentsAboveQuestions={
        <ListenButton audioLink={exercise.audioURL} playOnMount={true} />
      }
    />
  );
};

export default ShortListeningExercise;
