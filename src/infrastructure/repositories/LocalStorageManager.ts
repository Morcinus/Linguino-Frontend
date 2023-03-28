import axios from "axios";
import { User } from "infrastructure/api/users/Users";

export const LocalStorageManager = {
  setAuthorizationHeader(idToken: string): void {
    const authHeader = `Bearer ${idToken}`;
    axios.defaults.headers.common["Authorization"] = authHeader;
  },

  removeAuthorizationHeader(): void {
    delete axios.defaults.headers.common["Authorization"];
  },

  setIdToken(idToken: string): void {
    localStorage.setItem("IDToken", idToken);
  },

  getIdToken(): string {
    return localStorage.IDToken;
  },

  removeIdToken(): void {
    localStorage.removeItem("IDToken");
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

  setUser(user: User): void {
    localStorage.setItem("User", JSON.stringify(user));
  },

  getUser(): User {
    return JSON.parse(localStorage.User);
  },

  userExists(): boolean {
    return localStorage.getItem("User") !== null;
  },

  removeUser(): void {
    localStorage.removeItem("User");
  },
};
