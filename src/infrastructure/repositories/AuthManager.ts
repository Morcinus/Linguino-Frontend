import { LoginRequestBody } from "infrastructure/api/login/Login";
import LoginAPI from "infrastructure/api/login/LoginAPI";
import RefreshTokenAPI from "infrastructure/api/refresh-token/RefreshTokenAPI";
import { SignupRequestBody } from "infrastructure/api/signup/Signup";
import SignupAPI from "infrastructure/api/signup/SignupAPI";
import jwtDecode from "jwt-decode";

import { UserPrivate } from "../api/user/User";
import { LocalStorageManager } from "./LocalStorageManager";

const AuthManager = {
  logout(): void {
    LocalStorageManager.removeAuthorizationHeader();
    LocalStorageManager.removeIdToken();
    LocalStorageManager.removeRefreshToken();
    LocalStorageManager.removeUser();
  },

  async login(data: LoginRequestBody): Promise<UserPrivate> {
    return LoginAPI.login(data);
  },

  async signUp(data: SignupRequestBody): Promise<UserPrivate> {
    return SignupAPI.signUp(data);
  },

  async refreshIdToken(): Promise<void> {
    return RefreshTokenAPI.refreshIdToken({
      refreshToken: LocalStorageManager.getRefreshToken(),
    })
      .then((res) => {
        LocalStorageManager.setAuthorizationHeader(res.idToken);
        LocalStorageManager.setIdToken(res.idToken);
        LocalStorageManager.setRefreshToken(res.refreshToken);
      })
      .catch(() => {
        // Refresh token is expired, user needs to log in again
        this.logout();
      });
  },

  async getCurrentUser(): Promise<UserPrivate> {
    const token = LocalStorageManager.getIdToken();

    if (token) {
      const decodedToken = jwtDecode<DecodedToken>(token);
      // If Id token is expired
      if (decodedToken.exp * 1000 < Date.now()) await this.refreshIdToken();
    } else this.logout();

    if (LocalStorageManager.userExists()) {
      return LocalStorageManager.getUser();
    } else return Promise.reject("No user found.");
  },
};

export default AuthManager;

interface DecodedToken {
  exp: number;
}
