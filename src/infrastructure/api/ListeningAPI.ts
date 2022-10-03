import { FetchHook } from "./API";
import useAPI from "./useAPI";

export default class ListeningAPI {
  private static readonly URI = "listening-lessons";

  public static useListeningLessons(): FetchHook {
    return useAPI([this.URI, "?group=category&sort=+learningOrder"]);
  }
}
