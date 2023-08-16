import { HttpStatusCode } from '../api/client';

export interface HttpClientBaseHeader {
  'Content-Type': string;
  Authorization?: string;
}

export interface HttpClientBaseStatusCode {
  statusCode: number;
  statusText: HttpStatusCode;
}
