import { FetchHook } from "./API";
import useAPI from "./useAPI";

export default class PronunciationAPI {
  private static readonly URI = "pronunciation-lessons";

  public static usePronunciationLessons(): FetchHook {
    return useAPI([this.URI, "?group=category&sort=+learningOrder"]);
  }
}
