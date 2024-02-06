import { useTranslation } from "i18n/client";

import {
  IExerciseComponent,
  ReadingExercise as ReadingExerciseType,
} from "../../../../infrastructure/api/user/study-session/Exercises";
import Exercise from "../../../atoms/Exercise/Exercise";
import MarkdownText from "../../../atoms/MarkdownText/MarkdownText";
import { default as TextQuestionAnswerComponent } from "../../../atoms/question-answers/TextQuestionAnswer/TextQuestionAnswer";

export interface IReadingExercise extends IExerciseComponent {
  exercise: ReadingExerciseType;
}

const ReadingExercise: React.FC<IReadingExercise> = ({
  exercise,
  onContinue,
}) => {
  const { t } = useTranslation("cs", "common");
  const questionAnswer = {
    id: exercise.id,
    type: "TEXT",
    question: exercise.questionL2,
    answer: exercise.answerL2,
  };

  return (
    <Exercise
      assignmentTitle={t("exercises.reading.assignmentTitle")}
      onContinue={(arr) => {
        onContinue?.(arr, false);
      }}
      imageURL={exercise.imageURL}
      questionAnswers={[questionAnswer]}
      questionAnswerComponents={[
        {
          component: TextQuestionAnswerComponent,
          props: {
            questionAnswer: questionAnswer,
            variant: "short",
            size: "small",
          },
        },
      ]}
      componentsAboveQuestions={<MarkdownText text={exercise.article} />}
    />
  );
};

export default ReadingExercise;
