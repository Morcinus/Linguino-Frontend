import { useTranslation } from "i18n/client";

import { UserAnswer } from "../../../../domain/models/types/questionAttempts";
import {
  IExerciseComponent,
  TextExercise as TextExerciseType,
} from "../../../../infrastructure/api/user/study-session/Exercises";
import Exercise from "../../../atoms/Exercise/Exercise";
import TextQuestionAnswer from "../../../atoms/question-answers/TextQuestionAnswer/TextQuestionAnswer";

export interface ITextExercise extends IExerciseComponent {
  exercise: TextExerciseType;
}

const ANSWER_LENGTH_BREAKPOINT = 30;

const TextExercise: React.FC<ITextExercise> = ({ exercise, onContinue }) => {
  const { t } = useTranslation("cs", "common");
  const questionAnswer = {
    id: exercise.id,
    type: "TEXT",
    question: exercise.textL1,
    answer: exercise.textL2,
    answerAudioURL: exercise.textL2AudioURL,
  };

  return (
    <Exercise
      assignmentTitle={t("exercises.textExercise.assignmentTitle")}
      onContinue={(arr: Array<UserAnswer>) => {
        onContinue?.(arr, false);
      }}
      imageURL={exercise.imageURL}
      questionAnswers={[questionAnswer]}
      questionAnswerComponents={[
        {
          component: TextQuestionAnswer,
          props: {
            questionAnswer: questionAnswer,
            characterButtons: ["'"],
            rows:
              questionAnswer.answer.length > ANSWER_LENGTH_BREAKPOINT
                ? "long"
                : "short",
          },
        },
      ]}
    />
  );
};

export default TextExercise;
