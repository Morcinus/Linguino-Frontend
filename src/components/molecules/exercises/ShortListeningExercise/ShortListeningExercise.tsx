import { useTranslation } from "i18n/client";

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
  const { t } = useTranslation("cs", "common");
  const questionAnswer = {
    type: "SHORT_LISTENING",
    id: exercise.id,
    question: "",
    answer: exercise.textL2,
  };

  return (
    <Exercise
      assignmentTitle={t("exercises.shortListening.assignmentTitle")}
      onContinue={(arr: Array<UserAnswer>) => {
        onContinue?.(arr, false);
      }}
      questionAnswers={[questionAnswer]}
      questionAnswerComponents={[
        {
          component: TextQuestionAnswer,
          props: {
            questionAnswer: questionAnswer,
            characterButtons: ["'"],
          },
        },
      ]}
      componentsAboveQuestions={
        <ListenButton audioLink={exercise.textL2AudioURL} playOnMount={true} />
      }
    />
  );
};

export default ShortListeningExercise;
