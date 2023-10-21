import { UserPrivate } from "../user/User";

export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface LoginResponseBody {
  idToken: ID;
  refreshToken: ID;
  user: UserPrivate;
}
