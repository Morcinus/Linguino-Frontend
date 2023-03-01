import {
  IExerciseComponent,
  ReadingExercise as ReadingExerciseType,
} from "../../../../domain/models/types/exercises";
import { isFillInBlankQuestionAnswer } from "../../../../domain/models/types/guards/questionGuard";
import Exercise from "../../../atoms/Exercise/Exercise";
import FillTheBlank from "../../../atoms/FillTheBlank/FillTheBlank";
import MarkdownText from "../../../atoms/MarkdownText/MarkdownText";
import { default as TextQuestionAnswerComponent } from "../../../atoms/TextQuestionAnswer/TextQuestionAnswer";

export interface IReadingExercise extends IExerciseComponent {
  exercise: ReadingExerciseType;
}

const ReadingExercise: React.FC<IReadingExercise> = ({
  exercise,
  onContinue,
}) => {
  return (
    <Exercise
      assignmentTitle={exercise.assignmentTitle}
      onContinue={(arr) => {
        onContinue?.(arr, false);
      }}
      imageURL={exercise.imageURL}
      questionAnswers={exercise.questions}
      questionAnswerComponents={exercise.questions.map((questionAnswer) => {
        if (isFillInBlankQuestionAnswer(questionAnswer)) {
          return {
            component: FillTheBlank,
            props: {
              questionAnswer: questionAnswer,
            },
          };
        } else {
          return {
            component: TextQuestionAnswerComponent,
            props: {
              questionAnswer: questionAnswer,
              enableAudioInput: true,
              variant: "short",
              size: "small",
            },
          };
        }
      })}
      componentsAboveQuestions={<MarkdownText text={exercise.article} />}
    />
  );
};

export default ReadingExercise;
