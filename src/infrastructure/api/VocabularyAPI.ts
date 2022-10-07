import { CategoryLessons } from "../../domain/models/dtos/api/categoryLessons";
import { VocabularyLesson } from "../../domain/models/types/vocabulary";
import { Modify } from "../../domain/models/utils/modify";
import { FetchHook } from "./API";
import useAPI from "./useAPI";

export default class VocabularyAPI {
  private static readonly URI = "vocabulary-lessons";

  public static useVocabularyLessons(): Modify<
    FetchHook,
    { data: Array<CategoryLessons<VocabularyLesson>> }
  > {
    return useAPI(`${this.URI}?group=category&sort=+learningOrder`);
  }
}
