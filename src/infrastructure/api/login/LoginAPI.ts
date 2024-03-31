import API from "infrastructure/api/API";
import AuthManager from "infrastructure/repositories/AuthManager";
import { LocalStorageManager } from "infrastructure/repositories/LocalStorageManager";

import { UserPrivate } from "../user/User";
import { LoginRequestBody, LoginResponseBody } from "./Login";

export interface LoginParams {}

const LoginAPI = {
  URI: "login",

  async login(data: LoginRequestBody): Promise<UserPrivate> {
    return API.post(`${this.URI}`, data).then((resData: LoginResponseBody) => {
      AuthManager.setAuthHeader(resData.idToken);
      LocalStorageManager.setItem<string>("idToken", resData.idToken);
      LocalStorageManager.setItem<string>("refreshToken", resData.refreshToken);
      LocalStorageManager.setItem<UserPrivate>("user", resData.user);

      return resData.user;
    });
  },
};

export default LoginAPI;
