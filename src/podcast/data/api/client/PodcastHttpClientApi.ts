/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { AuthHttpClientApi } from '../../../../auth/data/api/client';
import { SpotifyAuthResponse } from '../../../../auth/data/models/interfaces';
import { HttpClientBase } from '../../../../common/data/api/client/HttpClientBase';
import { HttpClientBaseMehod } from '../../../../common/data/api/client/HttpClientBase.interfaces';

import type { PodcastHttpClientApiResponse } from './PodcastHttpClientApi.interfaces';

export class PodcastHttpClientApi extends HttpClientBase {
  private authApiClient: AuthHttpClientApi;
  header;

  constructor() {
    super();
    this.authApiClient = new AuthHttpClientApi();
    this.header = {
      'Content-Type': 'application/json',
    };
  }

  async get<T>(url: string): Promise<PodcastHttpClientApiResponse<T>> {
    const {
      data: { access_token },
    } = await this.authApiClient.createSpotifyToken<SpotifyAuthResponse>();

    const request = await this.createRequest(url, HttpClientBaseMehod.GET, {
      ...this.header,
      Authorization: 'Bearer ' + access_token,
    });

    return {
      data: request.responseByKey<T>(),
      isOk: request.isOk(),
    };
  }

  async post<T>(
    url: string,
    requestData: any,
  ): Promise<PodcastHttpClientApiResponse<T>> {
    const {
      data: { access_token },
    } = await this.authApiClient.createSpotifyToken<SpotifyAuthResponse>();
    const request = await this.createRequest(
      url,
      HttpClientBaseMehod.POST,
      { ...this.header, Authorization: 'Bearer ' + access_token },
      requestData,
    );

    return {
      data: request.responseByKey<T>(),
      isOk: request.isOk(),
    };
  }

  async put<T>(
    url: string,
    requestData: any,
  ): Promise<PodcastHttpClientApiResponse<T>> {
    const {
      data: { access_token },
    } = await this.authApiClient.createSpotifyToken<SpotifyAuthResponse>();
    const request = await this.createRequest(
      url,
      HttpClientBaseMehod.PUT,
      { ...this.header, Authorization: 'Bearer ' + access_token },
      requestData,
    );

    return {
      data: request.responseByKey<T>(),
      isOk: request.isOk(),
    };
  }
}
