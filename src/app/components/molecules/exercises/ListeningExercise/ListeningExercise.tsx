import {
  IExerciseComponent,
  ListeningExercise as ListeningExerciseType,
} from "../../../../../domain/models/types/exercises";
import { isFillInBlankQuestionAnswer } from "../../../../../domain/models/types/guards/questionGuard";
import { UserAnswer } from "../../../../../domain/models/types/questionAttempts";
import AudioPlayer from "../../../atoms/AudioPlayer/AudioPlayer";
import Exercise from "../../../atoms/Exercise/Exercise";
import FillTheBlank from "../../../atoms/FillTheBlank/FillTheBlank";
import { default as TextQuestionAnswerComponent } from "../../../atoms/TextQuestionAnswer/TextQuestionAnswer";

export interface IListeningExercise extends IExerciseComponent {
  exercise: ListeningExerciseType;
}

const ListeningExercise: React.FC<IListeningExercise> = ({
  exercise,
  onContinue,
}) => {
  const handleContinue = (arr: Array<UserAnswer>) => {
    onContinue?.(arr, false);

    console.log("Submitting", arr);
  };

  return (
    <Exercise
      assignmentTitle={exercise.assignmentTitle}
      onContinue={handleContinue}
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
      componentsAboveQuestions={
        <AudioPlayer audioLink={exercise.audioURL} playOnMount={true} />
      }
    />
  );
};

export default ListeningExercise;
