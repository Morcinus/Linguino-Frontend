import API from "infrastructure/api/API";
import { LocalStorageManager } from "infrastructure/repositories/LocalStorageManager";

import { UserPrivate } from "../user/User";
import { LoginRequestBody, LoginResponseBody } from "./Login";

export interface LoginParams {}

const LoginAPI = {
  URI: "login",

  async login(data: LoginRequestBody): Promise<UserPrivate> {
    return API.post(`${this.URI}`, data).then((resData: LoginResponseBody) => {
      LocalStorageManager.setAuthorizationHeader(resData.idToken);
      LocalStorageManager.setIdToken(resData.idToken);
      LocalStorageManager.setRefreshToken(resData.refreshToken);
      LocalStorageManager.setUser(resData.user);

      return resData.user;
    });
  },
};

export default LoginAPI;
