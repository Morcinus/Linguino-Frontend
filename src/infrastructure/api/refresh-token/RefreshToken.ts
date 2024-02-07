export interface RefreshTokenRequestBody {
  refreshToken: string;
}

export interface RefreshTokenResponseBody {
  refreshToken: string;
  idToken: string;
}
