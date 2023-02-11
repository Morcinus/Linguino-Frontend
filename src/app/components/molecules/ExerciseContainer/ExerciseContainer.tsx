import Box from "@mui/material/Box";

import { Exercise } from "../../../../domain/models/types/exercises";
import {
  isListeningExercise,
  isRapidQuestionExercise,
  isShortListeningExercise,
  isSpeechExercise,
  isTextExercise,
} from "../../../../domain/models/types/guards/exerciseGuard";
import { QuestionAttempt } from "../../../../domain/models/types/questions";
import ListeningExercise from "../../atoms/ListeningExercise/ListeningExercise";
import RapidQuestionExercise from "../../atoms/RapidQuestionExercise/RapidQuestionExercise";
import ShortListeningExercise from "../exercises/ShortListeningExercise/ShortListeningExercise";
import SpeechExercise from "../exercises/SpeechExercise/SpeechExercise";
import TextExercise from "../exercises/TextExercise/TextExercise";

export interface IExerciseContainer {
  exercise: Exercise;
  onContinue: (attempts: Array<QuestionAttempt>, reschedule: boolean) => void;
}

const ExerciseContainer: React.FC<IExerciseContainer> = ({
  exercise,
  onContinue,
}) => {
  function renderExercise() {
    if (isListeningExercise(exercise)) {
      return <ListeningExercise exercise={exercise} onContinue={onContinue} />;
    }

    if (isShortListeningExercise(exercise)) {
      return (
        <ShortListeningExercise exercise={exercise} onContinue={onContinue} />
      );
    }

    if (isRapidQuestionExercise(exercise)) {
      return (
        <RapidQuestionExercise exercise={exercise} onContinue={onContinue} />
      );
    }

    if (isSpeechExercise(exercise)) {
      return <SpeechExercise exercise={exercise} onContinue={onContinue} />;
    }

    if (isTextExercise(exercise)) {
      if (exercise.type === "LONG_TEXT") {
        return (
          <TextExercise
            exercise={exercise}
            onContinue={onContinue}
            variant="long"
          />
        );
      } else {
        return (
          <TextExercise
            exercise={exercise}
            onContinue={onContinue}
            variant="short"
          />
        );
      }
    }

    return <></>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "90%",
        margin: "auto",
        gap: 1,
        mb: 4,
      }}
    >
      {renderExercise()}
    </Box>
  );
};

export default ExerciseContainer;
