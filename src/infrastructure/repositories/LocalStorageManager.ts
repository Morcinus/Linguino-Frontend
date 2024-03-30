import axios from "axios";
import { UserPrivate } from "infrastructure/api/user/User";

export const LocalStorageManager = {
  setAuthorizationHeader(idToken: string): void {
    const authHeader = `Bearer ${idToken}`;
    axios.defaults.headers.common["Authorization"] = authHeader;
  },

  removeAuthorizationHeader(): void {
    delete axios.defaults.headers.common["Authorization"];
  },

  setIdToken(idToken: string): void {
    localStorage.setItem("IdToken", idToken);
  },

  getIdToken(): string {
    return localStorage.IdToken;
  },

  removeIdToken(): void {
    localStorage.removeItem("IdToken");
  },

  setRefreshToken(refreshToken: string): void {
    localStorage.setItem("RefreshToken", refreshToken);
  },

  getRefreshToken(): string {
    return localStorage.RefreshToken;
  },

  removeRefreshToken(): void {
    localStorage.removeItem("RefreshToken");
  },

  setUser(user: UserPrivate): void {
    localStorage.setItem("User", JSON.stringify(user));
  },

  getUser(): UserPrivate {
    return JSON.parse(localStorage.User);
  },

  userExists(): boolean {
    return localStorage.getItem("User") !== null;
  },

  removeUser(): void {
    localStorage.removeItem("User");
  },
};
