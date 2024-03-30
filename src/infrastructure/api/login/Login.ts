import { UserPrivate } from "../user/User";

export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface LoginResponseBody {
  idToken: Id;
  refreshToken: Id;
  user: UserPrivate;
}
