import API from "infrastructure/api/API";

import { ChangePasswordRequestBody } from "./ChangePassword";

export interface ChangePasswordParams {}

const ChangePasswordAPI = {
  URI: "change-password",

  async changePassword(data: ChangePasswordRequestBody): Promise<void> {
    return API.post(`${this.URI}`, data);
  },
};

export default ChangePasswordAPI;
