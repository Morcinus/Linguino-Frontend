import API from "infrastructure/api/API";
import { LocalStorageManager } from "infrastructure/repositories/LocalStorageManager";

import { UserPrivate } from "../user/User";
import { SignupRequestBody, SignupResponseBody } from "./Signup";

export interface SignupParams {}

const SignupAPI = {
  URI: "signup",

  signUp(data: SignupRequestBody): Promise<UserPrivate> {
    return API.post(`${this.URI}`, data).then((resData: SignupResponseBody) => {
      LocalStorageManager.setAuthorizationHeader(resData.idToken);
      LocalStorageManager.setIdToken(resData.idToken);
      LocalStorageManager.setRefreshToken(resData.refreshToken);
      LocalStorageManager.setUser(resData.user);

      return resData.user;
    });
  },
};

export default SignupAPI;
