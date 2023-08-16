/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { HttpClientBase } from '../../../../common/data/api/client/HttpClientBase';
import { HttpClientBaseMehod } from '../../../../common/data/api/client/HttpClientBase.interfaces';

import type { PodcastHttpClientApiResponse } from './PodcastHttpClientApi.interfaces';

export class PodcastHttpClientApi extends HttpClientBase {
  header;
  constructor() {
    super();
    this.header = {
      'Content-Type': 'application/json',
    };
  }

  async get<T>(url: string): Promise<PodcastHttpClientApiResponse<T>> {
    const request = await this.createRequest(
      url,
      HttpClientBaseMehod.GET,
      this.header,
    );

    return {
      data: request.responseByKey<T>(),
      isOk: request.isOk(),
    };
  }

  async post<T>(
    url: string,
    requestData: any,
  ): Promise<PodcastHttpClientApiResponse<T>> {
    const request = await this.createRequest(
      url,
      HttpClientBaseMehod.POST,
      this.header,
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
    const request = await this.createRequest(
      url,
      HttpClientBaseMehod.PUT,
      this.header,
      requestData,
    );

    return {
      data: request.responseByKey<T>(),
      isOk: request.isOk(),
    };
  }
}
