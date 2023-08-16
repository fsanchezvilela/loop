/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { HttpClientBaseHeader, HttpClientBaseStatusCode } from './index';
import {
  HttpClientBaseMehod,
  HttpStatusCode,
  IHttpClientBase,
} from './HttpClientBase.interfaces';

export class HttpClientBase implements IHttpClientBase {
  private resp: Response;
  private respBody: any;

  constructor() {
    this.resp = {} as Response;
  }

  async createRequest(
    url: string,
    method: HttpClientBaseMehod,
    httpHeader?: HttpClientBaseHeader,
    requestData?: any,
  ): Promise<this> {
    const requestInit: RequestInit = {
      method,
    };

    if (httpHeader) {
      requestInit.headers = httpHeader as never;
    }

    if (requestData) {
      requestInit.body = JSON.stringify(requestData);
    }

    this.resp = await fetch(url, requestInit);
    this.respBody = await this.resp.json();

    return this;
  }

  statusCode(): HttpClientBaseStatusCode {
    const statusCode = this.resp.status as HttpStatusCode;
    const statusText = HttpStatusCode[
      this.resp.status
    ] as unknown as HttpStatusCode;

    return {
      statusCode,
      statusText,
    };
  }

  isOk(): boolean {
    return this.resp.ok;
  }

  responseByKey<T>(key: string | null = null): T {
    if (key) {
      return this.respBody[key];
    } else {
      return this.respBody;
    }
  }

  responseData<T>(): T {
    return this.respBody?.data;
  }
}
