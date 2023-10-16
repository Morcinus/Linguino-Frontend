import { Modify } from "domain/models/utils/modify";
import API, { FetchHook } from "infrastructure/api/API";
import useAPI from "infrastructure/api/hooks/useAPI";
import { parseQueryParams } from "util/functions/api";

import { User } from "./Users";

export interface UserParams {
  searchName?: string;
}

const UsersAPI = {
  URI: "users",

  async updateUser(user: Partial<User>): Promise<User> {
    return API.put(`${this.URI}/${user.id}`, user);
  },

  useUsers(
    params: UserParams = {}
  ): Modify<FetchHook<Array<User>>, { users: Array<User> }> {
    const { data, ...rest } = useAPI<Array<User>>(
      `${this.URI}?${parseQueryParams(params)}`
    );
    return { users: data, ...rest };
  },
};

export default UsersAPI;
