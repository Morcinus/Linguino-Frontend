import API from "infrastructure/api/API";

import { ChangeEmailConfirmRequestBody } from "./ChangeEmailConfirm";

export interface ChangeEmailConfirmParams {}

const ChangeEmailConfirmAPI = {
  URI: "change-email-confirm",

  async confirmEmailChange(data: ChangeEmailConfirmRequestBody): Promise<void> {
    return API.post(`${this.URI}`, data);
  },
};

export default ChangeEmailConfirmAPI;
