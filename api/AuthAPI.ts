import axios from "axios";

import { LocalStorageManager } from "../util/LocalStorageManager";
import jwtDecode from "jwt-decode";

export const AuthAPI = {
  signUp(data: {
    username: string;
    email: string;
    password: string;
  }): Promise<User> {
    return axios.post("/signup", data).then((res) => {
      console.log(res);
      console.log(res.data.idToken);
      LocalStorageManager.setAuthorizationHeader(res.data.idToken);
      LocalStorageManager.setIdToken(res.data.idToken);
      LocalStorageManager.setRefreshToken(res.data.refreshToken);
      LocalStorageManager.setUser(res.data.user);

      return res.data.user;
    });
  },

  login(data: { email: string; password: string }): Promise<User> {
    return axios.post("/login", data).then((res) => {
      LocalStorageManager.setAuthorizationHeader(res.data.idToken);
      LocalStorageManager.setIdToken(res.data.idToken);
      LocalStorageManager.setRefreshToken(res.data.refreshToken);
      LocalStorageManager.setUser(res.data.user);

      return res.data.user;
    });
  },

  logout(): void {
    LocalStorageManager.removeAuthorizationHeader();
    LocalStorageManager.removeIdToken();
    LocalStorageManager.removeRefreshToken();
    LocalStorageManager.removeUser();
  },

  refreshIDToken(): Promise<void> {
    return axios
      .post(
        "https://securetoken.googleapis.com/v1/token?key=AIzaSyDws82Zg6zK8pQQT2JydDVDY3ZVJla7D58",
        {
          grant_type: "refresh_token",
          refresh_token: LocalStorageManager.getRefreshToken(),
        }
      )
      .then((res) => {
        LocalStorageManager.setAuthorizationHeader(res.data.idToken);
        LocalStorageManager.setIdToken(res.data.idToken);
        LocalStorageManager.setRefreshToken(res.data.refreshToken);
        LocalStorageManager.setUser(res.data.user);
      })
      .catch((err) => {
        // Refresh token is expired, user needs to log in again
        this.logout();
      });
  },

  getCurrentUser(): Promise<User> {
    return new Promise(() => {
      const decodedToken = jwtDecode<DecodedToken>(
        LocalStorageManager.getIdToken()
      );
      // If ID token is expired
      if (decodedToken.exp * 1000 < Date.now()) return this.refreshIDToken();

      return LocalStorageManager.getUser();
    });
  },
};

export interface User {
  username: string;
  email: string;
}

interface DecodedToken {
  exp: number;
}
