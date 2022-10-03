import { CategoryLessons } from "../../domain/models/dtos/api/categoryLessons";
import { ReadingLesson } from "../../domain/models/types/reading";
import { Modify } from "../../domain/models/utils/modify";
import { FetchHook } from "./API";
import useAPI from "./useAPI";

export default class ReadingAPI {
  private static readonly URI = "reading-lessons";

  public static useReadingLessons(): Modify<
    FetchHook,
    { data: Array<CategoryLessons<ReadingLesson>> }
  > {
    return useAPI([this.URI, "?group=category&sort=+learningOrder"]);
  }
}
