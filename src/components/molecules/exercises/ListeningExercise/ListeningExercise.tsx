import { useTranslation } from "i18n/client";
import { TextQuestionAnswer as TextQuestionAnswerType } from "infrastructure/api/user/courses/study-session/QuestionAnswers";

import {
  IExerciseComponent,
  ListeningExercise as ListeningExerciseType,
} from "../../../../infrastructure/api/user/courses/study-session/Exercises";
import { UserAnswer } from "../../../../infrastructure/api/user/courses/study-session/QuestionAttempt";
import AudioPlayer from "../../../atoms/AudioPlayer/AudioPlayer";
import Exercise from "../../../atoms/Exercise/Exercise";
import TextQuestionAnswer from "../../../atoms/question-answers/TextQuestionAnswer/TextQuestionAnswer";

export interface IListeningExercise extends IExerciseComponent {
  exercise: ListeningExerciseType;
}

const ListeningExercise: React.FC<IListeningExercise> = ({
  exercise,
  onContinue,
}) => {
  const handleContinue = (arr: Array<UserAnswer>) => {
    onContinue?.(arr, false);
  };

  const { t } = useTranslation("cs", "common");
  const questionAnswer: TextQuestionAnswerType = {
    type: "TEXT",
    id: exercise.id,
    question: exercise.questionL2,
    answer: exercise.answerL2,
  };

  return (
    <Exercise
      assignmentTitle={t("exercises.listening.assignmentTitle")}
      onContinue={handleContinue}
      imageURL={exercise.imageURL}
      questionAnswers={[questionAnswer]}
      questionAnswerComponents={[
        {
          component: TextQuestionAnswer,
          props: {
            questionAnswer: questionAnswer,
            variant: "short",
            size: "small",
          },
        },
      ]}
      componentsAboveQuestions={
        <AudioPlayer audioLink={exercise.audioURL} playOnMount={true} />
      }
    />
  );
};

export default ListeningExercise;
