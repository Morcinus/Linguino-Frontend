import API from "infrastructure/api/API";

import { User } from "./Users";

export interface UserParams {}

const UsersAPI = {
  URI: "users",

  async updateUser(user: Partial<User>): Promise<User> {
    return API.put(`${this.URI}/${user.id}`, user);
  },
};

export default UsersAPI;
