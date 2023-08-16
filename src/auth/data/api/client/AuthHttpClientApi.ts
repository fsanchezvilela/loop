/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { HttpClientBaseMehod } from '../../../../common/data/api/client';
import { HttpClientBase } from '../../../../common/data/api/client/HttpClientBase';
import { HttpClientBaseHeader } from '../../../../common/data/models/interfaces';
import { AuthHttpClientApiResponse } from './AuthHttpClientApi.interfaces';

export class AuthHttpClientApi extends HttpClientBase {
  private header: HttpClientBaseHeader;

  private client_id?: string;
  private client_secret?: string;
  private authQuery?: string;

  constructor() {
    super();
    this.client_id = process.env.VITE_SPOTIFY_CLIENT_ID;
    this.client_secret = process.env.VITE_SPOTIFY_CLIENT_SECRET;
    this.authQuery = Buffer.from(
      this.client_id + ':' + this.client_secret,
    ).toString('base64');
    this.header = {
      'Content-Type': 'application/x-www-form-urlencoded.',
      Authorization: 'Basic ' + this.authQuery,
    };
  }

  async createSpotifyToken<SpotifyAuthResponse>(): Promise<
    AuthHttpClientApiResponse<SpotifyAuthResponse>
  > {
    const request = await this.createRequest(
      'https://accounts.spotify.com/api/token',
      HttpClientBaseMehod.POST,
      this.header,
      'grant_type=client_credentials',
    );

    return {
      data: request.responseByKey<SpotifyAuthResponse>(),
      isOk: request.isOk(),
    };
  }
}
