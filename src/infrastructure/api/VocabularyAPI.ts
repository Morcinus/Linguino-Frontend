import { FetchHook } from "./API";
import useAPI from "./useAPI";

export default class VocabularyAPI {
  private static readonly URI = "vocabulary-lessons";

  public static useVocabularyLessons(): FetchHook {
    return useAPI([this.URI, "?group=category&sort=+learningOrder"]);
  }
}
