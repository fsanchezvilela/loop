import { type LoaderFunctionArgs } from 'react-router-dom';
import { caseLoginAuthAtSpotify } from '../domain/use-cases';

export interface ILoginRouteLoaders {
  connectSpotify: (payload: LoaderFunctionArgs) => null;
}

class LoginRouteLoaders implements ILoginRouteLoaders {
  connectSpotify = (payload: LoaderFunctionArgs) =>
    caseLoginAuthAtSpotify(payload);
}

export default LoginRouteLoaders;
