import Box from "@mui/material/Box";

import { Exercise } from "../../../../domain/models/types/exercises";
import {
  isListeningExercise,
  isShortListeningExercise,
  isSpeechExercise,
  isTextExercise,
} from "../../../../domain/models/types/guards/exerciseGuard";
import { QuestionAttempt } from "../../../../domain/models/types/questionAttempts";
import ListeningExercise from "../exercises/ListeningExercise/ListeningExercise";
import ShortListeningExercise from "../exercises/ShortListeningExercise/ShortListeningExercise";
import SpeechExercise from "../exercises/SpeechExercise/SpeechExercise";
import TextExercise from "../exercises/TextExercise/TextExercise";

export interface IExerciseContainer {
  exercise: Exercise;
  onContinue?: (attempts: Array<QuestionAttempt>, reschedule: boolean) => void;
}

const ExerciseContainer: React.FC<IExerciseContainer> = ({
  exercise,
  onContinue,
}) => {
  function renderExercise() {
    if (isListeningExercise(exercise)) {
      return <ListeningExercise exercise={exercise} onContinue={onContinue} />;
    }

    if (isSpeechExercise(exercise)) {
      return <SpeechExercise exercise={exercise} onContinue={onContinue} />;
    }

    if (isShortListeningExercise(exercise)) {
      return (
        <ShortListeningExercise exercise={exercise} onContinue={onContinue} />
      );
    }

    if (isTextExercise(exercise)) {
      return <TextExercise exercise={exercise} onContinue={onContinue} />;
    }

    return <></>;
  }

  return <Box>{renderExercise()}</Box>;
};

export default ExerciseContainer;
