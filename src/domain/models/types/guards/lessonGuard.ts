import {
  Background,
  GradientBackground,
  ImageBackground,
  LessonType,
} from "../lessons";

export function isLessonType(
  lesson: string | null | undefined
): lesson is LessonType {
  return (
    lesson === "VOCABULARY" ||
    lesson === "GRAMMAR" ||
    lesson === "LISTENING" ||
    lesson === "SPEAKING" ||
    lesson === "PRONUNCIATION" ||
    lesson === "READING"
  );
}

export function isImageBackground(
  background: Background
): background is ImageBackground {
  return (background as ImageBackground).imageURL !== undefined;
}

export function isGradientBackground(
  background: Background
): background is GradientBackground {
  return (background as GradientBackground).gradient !== undefined;
}
