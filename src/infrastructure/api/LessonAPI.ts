import { CategoryLessons } from "../../domain/models/dtos/api/categoryLessons";
import { LessonType } from "../../domain/models/types/lessons";
import { Modify } from "../../domain/models/utils/modify";
import { FetchHook } from "./API";
import useAPI from "./hooks/useAPI";

export default class LessonAPI {
  private static readonly URI = "lessons";

  public static useLessons(
    lessonType: LessonType
  ): Modify<FetchHook, { data: Array<CategoryLessons> }> {
    return useAPI(
      `${this.URI}/${lessonType}?group=category&sort=+learningOrder`
    );
  }
}
