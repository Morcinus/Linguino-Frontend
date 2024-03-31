import API from "infrastructure/api/API";

import { UserPrivate } from "./User";

export interface UserParams {}

const UserAPI = {
  URI: "user",

  async getUser(): Promise<UserPrivate> {
    return API.get(`${this.URI}`);
  },
};

export default UserAPI;
