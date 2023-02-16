import {
  IExerciseComponent,
  RepeatAudioExercise as RepeatAudioExerciseType,
} from "../../../../../domain/models/types/exercises";
import { UserAnswer } from "../../../../../domain/models/types/questionAttempts";
import AudioQuestionAnswer from "../../../atoms/AudioQuestionAnswer/AudioQuestionAnswer";
import Exercise from "../../../atoms/Exercise/Exercise";
import ListenButton from "../../../atoms/ListenButton/ListenButton";

export interface IRepeatAudioExercise extends IExerciseComponent {
  exercise: RepeatAudioExerciseType;
}

const RepeatAudioExercise: React.FC<IRepeatAudioExercise> = ({
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
          component: AudioQuestionAnswer,
          props: {
            questionAnswer: exercise.question,
          },
        },
      ]}
      componentsAboveQuestions={
        <ListenButton audioLink={exercise.audioURL} playOnMount={true} />
      }
      submitBeforeContinue={false}
    />
  );
};

export default RepeatAudioExercise;
