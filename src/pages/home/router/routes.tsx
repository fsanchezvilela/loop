import { type RouteObject } from 'react-router-dom';
import { Home, ChildrenElementTest } from '../view/components';
import { Error } from '../../error/view/components';
import HomeRouteLoaders from './loaders';

const { getPodcast } = new HomeRouteLoaders();

const root: RouteObject = {
  id: 'home',
  path: '/',
  element: <Home />,
  errorElement: <Error />,
  // Route Children Navigation
  children: [
    {
      loader: getPodcast,
      path: '/:podcastId',
      element: <ChildrenElementTest />,
    },
  ],
};

const detail: RouteObject = {
  id: 'home-detail',
  path: '/podcast/:podcastId',
  loader: getPodcast,
  element: <ChildrenElementTest />,
  errorElement: <Error />,
};

const routesCollection: RouteObject[] = [root, detail];

export default routesCollection;
