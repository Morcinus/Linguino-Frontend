import { Exercise } from "../types/exercises";

export function getExplanation(obj: Exercise): string | undefined {
  if ("explanation" in obj) {
    return obj.explanation;
  }

  return undefined;
}
