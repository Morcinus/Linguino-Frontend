import API from "infrastructure/api/API";

import { UserPrivate } from "./User";

export interface UserParams {}

const UserAPI = {
  URI: "user",

  async getUser(): Promise<UserPrivate> {
    return API.get(`${this.URI}`);
  },

  async updateUser(user: Partial<UserPrivate>): Promise<UserPrivate> {
    return API.put(`${this.URI}`, user);
  },
};

export default UserAPI;
