import { type LoaderFunctionArgs } from 'react-router-dom';
import { IPodcast } from '../../../podcast/domain/models/Podcast.types';
import { useCaseGetPodcastRouteLoader } from '../domain/use-cases';

export interface IHomeRouteLoaders {
  getPodcast(payload: LoaderFunctionArgs): Promise<IPodcast | null>;
}

class HomeRouteLoaders implements IHomeRouteLoaders {
  getPodcast = (payload: LoaderFunctionArgs) =>
    useCaseGetPodcastRouteLoader(payload);
}

export default HomeRouteLoaders;
