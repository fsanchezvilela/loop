import { type LoaderFunctionArgs } from 'react-router-dom';
import PodcastRepository from '../../../../podcast/data/repositories/PodcastRepository';
import { IPodcast } from '../../../../podcast/domain/models/Podcast.types';

export async function useCaseGetPodcastRouteLoader({
  params,
}: LoaderFunctionArgs): Promise<IPodcast | null> {
  if (!params?.podcastId) {
    return null;
  }
  const repository = new PodcastRepository();
  const podcast = await repository.getPodcast(params.podcastId);
  return podcast;
}
