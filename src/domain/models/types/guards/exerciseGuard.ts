import {
  Exercise,
  ListeningExercise,
  RapidQuestionExercise,
  ShortListeningExercise,
  SpeechExercise,
  TextExercise,
} from "../exercises";

export function isListeningExercise(
  exercise: Exercise
): exercise is ListeningExercise {
  return (exercise as ListeningExercise).type === "LISTENING";
}

export function isShortListeningExercise(
  exercise: Exercise
): exercise is ShortListeningExercise {
  return (exercise as ShortListeningExercise).type === "LISTEN_AND_WRITE";
}

export function isRapidQuestionExercise(
  exercise: Exercise
): exercise is RapidQuestionExercise {
  return (exercise as RapidQuestionExercise).type === "RAPID_QUESTIONS";
}

export function isSpeechExercise(
  exercise: Exercise
): exercise is SpeechExercise {
  return (exercise as SpeechExercise).type === "SPEECH";
}

export function isTextExercise(exercise: Exercise): exercise is TextExercise {
  return (
    (exercise as TextExercise).type === "LONG_TEXT" ||
    (exercise as TextExercise).type === "SHORT_TEXT"
  );
}
