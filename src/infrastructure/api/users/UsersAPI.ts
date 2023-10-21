import { Modify } from "domain/models/utils/modify";
import { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { UserPublic } from "./Users";

export interface UserParams {
  searchName?: string;
}

const UsersAPI = {
  URI: "users",

  useUsers(
    params: UserParams = {}
  ): Modify<FetchHook<Array<UserPublic>>, { users: Array<UserPublic> }> {
    const { data, ...rest } = useAPI<Array<UserPublic>>(
      `${this.URI}?${parseQueryParams(params)}`
    );
    return { users: data, ...rest };
  },
};

export default UsersAPI;
