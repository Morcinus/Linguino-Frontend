import {
  Exercise,
  ListeningExercise,
  ReadAloudExercise,
  ReadingExercise,
  RepeatAudioExercise,
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
  return (exercise as ShortListeningExercise).type === "SHORT_LISTENING";
}

export function isSpeechExercise(
  exercise: Exercise
): exercise is SpeechExercise {
  return (exercise as SpeechExercise).type === "SPEECH";
}

export function isTextExercise(exercise: Exercise): exercise is TextExercise {
  return (exercise as TextExercise).type === "TEXT";
}

export function isReadingExercise(
  exercise: Exercise
): exercise is ReadingExercise {
  return (exercise as ReadingExercise).type === "READING";
}

export function isRepeatAudioExercise(
  exercise: Exercise
): exercise is RepeatAudioExercise {
  return (exercise as RepeatAudioExercise).type === "REPEAT_AUDIO";
}

export function isReadAloudExercise(
  exercise: Exercise
): exercise is ReadAloudExercise {
  return (exercise as ReadAloudExercise).type === "READ_ALOUD";
}
