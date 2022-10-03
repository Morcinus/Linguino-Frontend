import { FetchHook } from "./API";
import useAPI from "./useAPI";

export default class GrammarAPI {
  private static readonly URI = "grammar-lessons";

  public static useGrammarLessons(): FetchHook {
    return useAPI([this.URI, "?group=category&sort=+learningOrder"]);
  }
}
