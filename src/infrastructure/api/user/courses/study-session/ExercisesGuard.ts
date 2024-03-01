import {
  BuildWordExercise,
  Exercise,
  FillInSentenceExercise,
  FillInTableExercise,
  ListeningExercise,
  MatchingExercise,
  ReadAloudExercise,
  ReadingExercise,
  RepeatAudioExercise,
  ShortListeningExercise,
  SpeechExercise,
  TextExercise,
} from "./Exercises";

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

export function isBuildWordExercise(
  exercise: Exercise
): exercise is BuildWordExercise {
  return (exercise as BuildWordExercise).type === "BUILD_WORD";
}

export function isFillInTableExercise(
  exercise: Exercise
): exercise is FillInTableExercise {
  return (exercise as FillInTableExercise).type === "FILL_TABLE";
}

export function isFillInSentenceExercise(
  exercise: Exercise
): exercise is FillInSentenceExercise {
  return (exercise as FillInSentenceExercise).type === "FILL_IN_SENTENCE";
}

export function isMatchingExercise(
  exercise: Exercise
): exercise is MatchingExercise {
  return (exercise as MatchingExercise).type === "MATCHING";
}
