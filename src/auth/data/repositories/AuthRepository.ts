import {
  IAuthRepository,
  SpotifyAuthCode,
} from '../../domain/models/AuthRepository.interfaces';
import { AuthHttpClientApi } from '../api/client';
import { SpotifyAuthResponse } from '../models/interfaces';

class AuthRepository implements IAuthRepository {
  private authHttpClient: AuthHttpClientApi;
  private access_token: string;
  private refresh_token: string;
  private redirect_uri: string;
  private client_id: string;

  constructor() {
    this.authHttpClient = new AuthHttpClientApi();
    this.access_token = '';
    this.refresh_token = '';
    this.redirect_uri = this.authHttpClient.redirectUri;
    this.client_id = this.authHttpClient.client_id ?? '';
  }

  setTokens({
    access_token,
    refresh_token,
  }: Partial<SpotifyAuthResponse>): void {
    if (access_token) {
      this.access_token = access_token;
    }
    if (refresh_token) {
      this.refresh_token = refresh_token;
    }
  }
  getTokens(): { access_token?: string; refresh_token?: string } {
    return {
      access_token: this.access_token,
      refresh_token: this.refresh_token,
    };
  }
  connectToSpotify(): void {
    this.authHttpClient.authInSpotify();
  }
  generateSpotifyAccessToken({ code, codeVerifier }: SpotifyAuthCode): void {
    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: this.redirect_uri,
      client_id: this.client_id,
      code_verifier: codeVerifier,
    });
    console.log({ body: [...body.values()] });
    this.authHttpClient
      .post<SpotifyAuthResponse>(
        'https://accounts.spotify.com/api/token?grant_type=client_credentials',
        body,
      )
      .then((response) => {
        if (!response.isOk) {
          throw new Error('Error Status ');
        }
        return response.data;
      })
      .then((data) => {
        this.setTokens(data);
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  refreshSpotifyAccessToken(): void {
    const body = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: this.refresh_token,
      client_id: this.client_id,
    });

    this.authHttpClient
      .post<SpotifyAuthResponse>('https://accounts.spotify.com/api/token', body)
      .then((response) => {
        if (!response.isOk) {
          throw new Error('Error Status ');
        }
        return response.data;
      })
      .then((data) => {
        this.setTokens(data);
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}

export default AuthRepository;
