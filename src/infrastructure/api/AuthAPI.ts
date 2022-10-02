import axios from "axios";
import jwtDecode from "jwt-decode";

import { LocalStorageManager } from "../repositories/LocalStorageManager";

export const AuthAPI = {
  signUp(data: {
    username: string;
    email: string;
    password: string;
  }): Promise<User> {
    return axios.post("/signup", data).then((res) => {
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
        `${process.env.NEXT_PUBLIC_FIREBASE_TOKEN_API_URL}token?key=${process.env.NEXT_PUBLIC_FIREBASE_TOKEN_API_KEY}`,
        {
          grant_type: "refresh_token",
          refresh_token: LocalStorageManager.getRefreshToken(),
        }
      )
      .then((res) => {
        LocalStorageManager.setAuthorizationHeader(res.data.idToken);
        LocalStorageManager.setIdToken(res.data.idToken);
        LocalStorageManager.setRefreshToken(res.data.refreshToken);
      })
      .catch((err) => {
        // Refresh token is expired, user needs to log in again
        this.logout();
      });
  },

  getCurrentUser(): Promise<User> {
    return new Promise(async (resolve, reject) => {
      let token = LocalStorageManager.getIdToken();

      if (token) {
        const decodedToken = jwtDecode<DecodedToken>(token);
        // If ID token is expired
        if (decodedToken.exp * 1000 < Date.now()) await this.refreshIDToken();
      } else this.logout();

      if (LocalStorageManager.userExists())
        resolve(LocalStorageManager.getUser());
      else reject(null);
    });
  },
};

export interface User {
  username: string;
  email: string;
  completedDailyGoal?: boolean;
  streak?: number;
}

interface DecodedToken {
  exp: number;
}
