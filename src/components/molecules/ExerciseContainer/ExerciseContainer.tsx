import Box from "@mui/material/Box";

import { QuestionAttempt } from "../../../domain/models/types/questionAttempts";
import { Exercise } from "../../../infrastructure/api/user/study-session/Exercises";
import {
  isBuildWordExercise,
  isFillInSentenceExercise,
  isFillInTableExercise,
  isListeningExercise,
  isMatchingExercise,
  isReadAloudExercise,
  isReadingExercise,
  isRepeatAudioExercise,
  isShortListeningExercise,
  isSpeechExercise,
  isTextExercise,
} from "../../../infrastructure/api/user/study-session/ExercisesGuard";
import BuildWordExercise from "../exercises/BuildWordExercise/BuildWordExercise";
import FillInSentenceExercise from "../exercises/FillInSentenceExercise/FillInSentenceExercise";
import FillInTableExercise from "../exercises/FillInTableExercise/FillInTableExercise";
import ListeningExercise from "../exercises/ListeningExercise/ListeningExercise";
import MatchingExercise from "../exercises/MatchingExercise/MatchingExercise";
import ReadAloudExercise from "../exercises/ReadAloudExercise/ReadAloudExercise";
import ReadingExercise from "../exercises/ReadingExercise/ReadingExercise";
import RepeatAudioExercise from "../exercises/RepeatAudioExercise/RepeatAudioExercise";
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

    if (isReadingExercise(exercise)) {
      return <ReadingExercise exercise={exercise} onContinue={onContinue} />;
    }

    if (isRepeatAudioExercise(exercise)) {
      return (
        <RepeatAudioExercise exercise={exercise} onContinue={onContinue} />
      );
    }

    if (isReadAloudExercise(exercise)) {
      return <ReadAloudExercise exercise={exercise} onContinue={onContinue} />;
    }

    if (isBuildWordExercise(exercise)) {
      return <BuildWordExercise exercise={exercise} onContinue={onContinue} />;
    }

    if (isFillInTableExercise(exercise)) {
      return (
        <FillInTableExercise exercise={exercise} onContinue={onContinue} />
      );
    }

    if (isFillInSentenceExercise(exercise)) {
      return (
        <FillInSentenceExercise exercise={exercise} onContinue={onContinue} />
      );
    }

    if (isMatchingExercise(exercise)) {
      return <MatchingExercise exercise={exercise} onContinue={onContinue} />;
    }
  }

  return <Box>{renderExercise()}</Box>;
};

export default ExerciseContainer;
