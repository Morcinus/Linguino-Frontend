import { Exercise } from "../../../infrastructure/api/user/courses/study-session/Exercises";

export function getExplanation(obj: Exercise): string | undefined {
  if ("explanation" in obj) {
    return obj.explanation;
  }

  return undefined;
}
