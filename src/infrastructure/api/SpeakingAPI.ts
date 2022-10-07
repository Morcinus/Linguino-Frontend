import { CategoryLessons } from "../../domain/models/dtos/api/categoryLessons";
import { SpeakingLesson } from "../../domain/models/types/speaking";
import { Modify } from "../../domain/models/utils/modify";
import { FetchHook } from "./API";
import useAPI from "./useAPI";

export default class SpeakingAPI {
  private static readonly URI = "speaking-lessons";

  public static useSpeakingLessons(): Modify<
    FetchHook,
    { data: Array<CategoryLessons<SpeakingLesson>> }
  > {
    return useAPI(`${this.URI}?group=category&sort=+learningOrder`);
  }
}
