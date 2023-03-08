import { LessonType } from "../lessons";

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
