import { FetchHook } from "./API";
import useAPI from "./useAPI";

export default class ReadingAPI {
  private static readonly URI = "reading-lessons";

  public static useReadingLessons(): FetchHook {
    return useAPI([this.URI, "?group=category&sort=+learningOrder"]);
  }
}
