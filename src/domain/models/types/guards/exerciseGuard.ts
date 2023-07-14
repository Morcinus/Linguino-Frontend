import {
  NewGrammar,
  NewVocabulary,
} from "infrastructure/api/users/exercises/Exercises";

import {
  BuildWordExercise,
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

export function isNewVocabulary(exercise: Exercise): exercise is NewVocabulary {
  return (exercise as NewVocabulary).type === "NEW_VOCABULARY";
}

export function isNewGrammar(exercise: Exercise): exercise is NewGrammar {
  return (exercise as NewGrammar).type === "NEW_GRAMMAR";
}

export function isBuildWordExercise(
  exercise: Exercise
): exercise is BuildWordExercise {
  return (exercise as BuildWordExercise).type === "BUILD_WORD";
}
