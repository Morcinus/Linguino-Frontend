import { UserSettings } from "../../domain/models/types/settings";
import { SWRHook } from "./API";
import useAPI from "./hooks/useAPI";

const UserAPI = {
  URI: "users",

  useUserSettings(userId: ID | undefined): SWRHook<UserSettings> {
    return useAPI(() => (userId ? `${this.URI}/${userId}/settings` : false));
  },
};

export default UserAPI;
