import {
  IExerciseComponent,
  TextExercise as TextExerciseType,
} from "../../../../../domain/models/types/exercises";
import { UserAnswer } from "../../../../../domain/models/types/questionAttempts";
import Exercise from "../../../atoms/Exercise/Exercise";
import TextQuestionAnswer from "../../../atoms/TextQuestionAnswer/TextQuestionAnswer";

export interface ITextExercise extends IExerciseComponent {
  exercise: TextExerciseType;
}

const ANSWER_LENGTH_BREAKPOINT = 30;

const TextExercise: React.FC<ITextExercise> = ({ exercise, onContinue }) => {
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
            rows:
              exercise.question.answer.length > ANSWER_LENGTH_BREAKPOINT
                ? "long"
                : "short",
          },
        },
      ]}
    />
  );
};

export default TextExercise;
