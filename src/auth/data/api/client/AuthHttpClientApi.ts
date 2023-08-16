/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { HttpClientBase } from '../../../../common/data/api/client/HttpClientBase';

import { Buffer } from 'buffer';

import {
  HttpClientBaseHeader,
  HttpClientBaseMehod,
} from '../../../../common/data/api/client';
import { AuthHttpClientApiResponse } from '.';

// @ts-ignore
window.Buffer = Buffer;
export class AuthHttpClientApi extends HttpClientBase {
  public client_id?: string;
  public redirectUri: string;
  public header: HttpClientBaseHeader;

  constructor() {
    super();
    this.header = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    this.redirectUri = process.env.VITE_BASE_URL! + 'callback';
    this.client_id = process.env.VITE_SPOTIFY_CLIENT_ID!;
  }

  generateRandomString(length: number) {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  async generateCodeChallenge(codeVerifier: string) {
    function base64encode(string: ArrayBufferLike) {
      return btoa(
        String.fromCharCode.apply(null, Array.from(new Uint8Array(string))),
      )
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);

    return base64encode(digest);
  }

  authInSpotify() {
    const codeVerifier = this.generateRandomString(128);
    this.generateCodeChallenge(codeVerifier)
      .then((codeChallenge) => {
        const state = this.generateRandomString(16);
        const scope = 'user-read-private user-read-email';

        localStorage.setItem('code_verifier', codeVerifier);

        const args = new URLSearchParams({
          response_type: 'code',
          client_id: this.client_id!,
          scope: scope,
          redirect_uri: this.redirectUri,
          state: state,
          code_challenge_method: 'S256',
          code_challenge: codeChallenge,
        });

        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        window.location = 'https://accounts.spotify.com/authorize?' + args;
      })
      .catch((e: string) => {
        throw new Error(e);
      });
  }

  async get<T>(url: string): Promise<AuthHttpClientApiResponse<T>> {
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
  ): Promise<AuthHttpClientApiResponse<T>> {
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
  ): Promise<AuthHttpClientApiResponse<T>> {
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
