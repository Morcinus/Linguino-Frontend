import { Exercise } from "../../../../domain/models/types/exercises";
import { QuestionAttempt } from "../../../../domain/models/types/questions";
import ListeningExercise from "../../atoms/ListeningExercise/ListeningExercise";
import RapidQuestionExercise from "../../atoms/RapidQuestionExercise/RapidQuestionExercise";
import ShortListenExercise from "../../atoms/ShortListenExercise/ShortListenExercise";
import SpeechExercise from "../../atoms/SpeechExercise/SpeechExercise";
import TextExercise from "../../atoms/TextExercise/TextExercise";

export interface IExerciseSwitcher {
  exercise: Exercise;
  onContinue: (attempts: Array<QuestionAttempt>, reschedule: boolean) => void;
}

const ExerciseSwitcher: React.FC<IExerciseSwitcher> = (props) => {
  function renderSwitch() {
    switch (props.exercise.type) {
      case "LONG_TEXT":
        // @ts-ignore
        return <TextExercise {...props} variant="long" />;
      case "SHORT_TEXT":
        // @ts-ignore
        return <TextExercise {...props} variant="short" />;
      case "LISTEN_AND_WRITE":
        // @ts-ignore
        return <ShortListenExercise {...props} />;
      case "SPEECH":
        // @ts-ignore
        return <SpeechExercise {...props} />;
      case "RAPID_QUESTIONS":
        // @ts-ignore
        return <RapidQuestionExercise {...props} />;
      default:
        return <>None</>;
    }
  }

  return <div>{renderSwitch()}</div>;
};

export default ExerciseSwitcher;
