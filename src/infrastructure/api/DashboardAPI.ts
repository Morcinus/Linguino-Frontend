import { FetchHook } from "./API";
import useAPI from "./useAPI";

export default class DashboardAPI {
  private static readonly URI = "dashboard";

  public static useDailyLearnButton(): FetchHook {
    return useAPI([`${this.URI}/daily-learn-button`]);
  }
}
