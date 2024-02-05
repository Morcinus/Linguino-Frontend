import { UserAnswer } from "../../../../domain/models/types/questionAttempts";
import {
  IExerciseComponent,
  ShortListeningExercise as ShortListeningExerciseType,
} from "../../../../infrastructure/api/user/study-session/Exercises";
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
          component: TextQuestionAnswer,
          props: {
            questionAnswer: exercise.question,
            characterButtons: ["'"],
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
