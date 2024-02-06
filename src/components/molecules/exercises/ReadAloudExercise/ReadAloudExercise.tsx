import { useTranslation } from "i18n/client";

import { UserAnswer } from "../../../../domain/models/types/questionAttempts";
import {
  IExerciseComponent,
  ReadAloudExercise as ReadAloudExerciseType,
} from "../../../../infrastructure/api/user/study-session/Exercises";
import Exercise from "../../../atoms/Exercise/Exercise";
import AudioQuestionAnswer from "../../../atoms/question-answers/AudioQuestionAnswer/AudioQuestionAnswer";

export interface IReadAloudExercise extends IExerciseComponent {
  exercise: ReadAloudExerciseType;
}

const ReadAloudExercise: React.FC<IReadAloudExercise> = ({
  exercise,
  onContinue,
}) => {
  const { t } = useTranslation("cs", "common");
  const questionAnswer = {
    id: exercise.id,
    type: "AUDIO",
    question: exercise.textL2,
    answer: exercise.textL2,
  };

  return (
    <Exercise
      assignmentTitle={t("exercises.readAloud.assignmentTitle")}
      onContinue={(arr: Array<UserAnswer>) => {
        onContinue?.(arr, false);
      }}
      imageURL={exercise.imageURL}
      questionAnswers={[questionAnswer]}
      questionAnswerComponents={[
        {
          component: AudioQuestionAnswer,
          props: {
            questionAnswer: questionAnswer,
          },
        },
      ]}
      submitBeforeContinue={false}
    />
  );
};

export default ReadAloudExercise;
