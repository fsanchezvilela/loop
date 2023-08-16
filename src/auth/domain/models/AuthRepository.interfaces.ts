import { SpotifyAuthResponse } from '../../data/models/interfaces';

export interface SpotifyAuthCode {
  code: string;
  codeVerifier: string;
}

export interface IAuthRepository {
  getTokens(): { access_token?: string; refresh_token?: string };
  setTokens({
    access_token,
    refresh_token,
  }: Partial<SpotifyAuthResponse>): void;
  connectToSpotify(): void;
  generateSpotifyAccessToken({ code, codeVerifier }: SpotifyAuthCode): void;
}
