import { type RouteObject } from 'react-router-dom';
import { Login } from '../view/components';
import { Error } from '../../error/view/components';
import LoginRouteLoaders from './loaders';

const { connectSpotify } = new LoginRouteLoaders();

const root: RouteObject = {
  id: 'login',
  path: '/callback',
  loader: connectSpotify,
  element: <Login />,
  errorElement: <Error />,
};

const routesCollection: RouteObject[] = [root];

export default routesCollection;
