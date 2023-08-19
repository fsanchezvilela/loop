import AuthRepository from '../../../../auth/data/repositories/AuthRepository';
import { type LoaderFunctionArgs } from 'react-router-dom';

export function caseLoginAuthAtSpotify(props: LoaderFunctionArgs): null {
  console.log(props);
  const repository = new AuthRepository();
  const accessToken = localStorage.getItem('access_token');
  if (accessToken) {
    return null;
  }

  if (!props.request.url.includes('code')) {
    repository.connectToSpotify();
    return null;
  }
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code') ?? '';
  const codeVerifier = localStorage.getItem('code_verifier') ?? '';
  repository.generateSpotifyAccessToken({ code, codeVerifier });
  console.log(repository.getTokens());
  return null;
}
