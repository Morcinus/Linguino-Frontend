import { FetchHook } from "./API";
import useAPI from "./useAPI";

export default class SpeakingAPI {
  private static readonly URI = "speaking-lessons";

  public static useSpeakingLessons(): FetchHook {
    return useAPI([this.URI, "?group=category&sort=+learningOrder"]);
  }
}
