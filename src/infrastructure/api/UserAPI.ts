import { UserSettings } from "../../domain/models/types/settings";
import { Modify } from "../../domain/models/utils/modify";
import { FetchHook } from "./API";
import useAPI from "./hooks/useAPI";

export default class UserAPI {
  private static readonly URI = "users";

  public static useUserSettings(
    userId: ID | undefined
  ): Modify<FetchHook, { data: UserSettings }> {
    return useAPI(() => (userId ? `${this.URI}/${userId}/settings` : false));
  }
}
