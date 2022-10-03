import { CategoryLessons } from "../../domain/models/dtos/api/categoryLessons";
import { PronunciationLesson } from "../../domain/models/types/pronunciation";
import { Modify } from "../../domain/models/utils/modify";
import { FetchHook } from "./API";
import useAPI from "./useAPI";

export default class PronunciationAPI {
  private static readonly URI = "pronunciation-lessons";

  public static usePronunciationLessons(): Modify<
    FetchHook,
    { data: Array<CategoryLessons<PronunciationLesson>> }
  > {
    return useAPI([this.URI, "?group=category&sort=+learningOrder"]);
  }
}
