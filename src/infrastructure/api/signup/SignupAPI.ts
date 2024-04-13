import API from "infrastructure/api/API";
import AuthManager from "infrastructure/repositories/AuthManager";
import { LocalStorageManager } from "infrastructure/repositories/LocalStorageManager";

import { UserPrivate } from "../user/User";
import { SignupRequestBody, SignupResponseBody } from "./Signup";

export interface SignupParams {}

const SignupAPI = {
  URI: "signup",

  async signUp(data: SignupRequestBody): Promise<UserPrivate> {
    return API.post(`${this.URI}`, data).then((resData: SignupResponseBody) => {
      AuthManager.setAuthHeader(resData.idToken);
      LocalStorageManager.setItem<string>("idToken", resData.idToken);
      LocalStorageManager.setItem<string>("refreshToken", resData.refreshToken);
      LocalStorageManager.setItem<UserPrivate>("user", resData.user);

      return resData.user;
    });
  },
};

export default SignupAPI;
