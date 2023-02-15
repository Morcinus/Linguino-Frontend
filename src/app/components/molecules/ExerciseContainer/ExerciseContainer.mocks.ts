import { mockListeningExerciseProps } from "../exercises/ListeningExercise/ListeningExercise.mocks";
import { mockShortListeningExerciseProps } from "../exercises/ShortListeningExercise/ShortListeningExercise.mocks";
import { mockSpeechExerciseProps } from "../exercises/SpeechExercise/SpeechExercise.mocks";
import { mockTextExerciseProps } from "../exercises/TextExercise/TextExercise.mocks";

export const mockExerciseContainerProps = {
  listeningExercise: mockListeningExerciseProps.base,
  speechExercise: mockSpeechExerciseProps.base,
  shortListeningExercise: mockShortListeningExerciseProps.base,
  textExercise: mockTextExerciseProps.base,
};
