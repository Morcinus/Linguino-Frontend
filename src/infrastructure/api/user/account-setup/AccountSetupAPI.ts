import API from "infrastructure/api/API";

import { AccountSetup } from "./AccountSetup";

export interface AccountSetupParams {}

const AccountSetupAPI = {
  URI: "user/account-setup",

  async setupAccount(accountSetup: AccountSetup): Promise<void> {
    return API.post(`${this.URI}`, accountSetup);
  },
};

export default AccountSetupAPI;
