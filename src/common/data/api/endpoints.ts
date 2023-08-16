import { ComposeQueryProps } from './endpoints.interfaces';

export const BASE_URL = process.env.BASE_URL;

export const composeQuery = ({ version }: ComposeQueryProps) => {
  if (version) {
    return `${BASE_URL}/${version}/`;
  }
  return `${BASE_URL}/`;
};
