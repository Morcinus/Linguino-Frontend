import API from "infrastructure/api/API";

import { UserPrivate } from "./User";

export interface UserParams {}

const UserAPI = {
  URI: "user",

  async updateUser(user: Partial<UserPrivate>): Promise<UserPrivate> {
    return API.put(`${this.URI}/${user.id}`, user);
  },
};

export default UserAPI;
