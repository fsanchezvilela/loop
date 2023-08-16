import { IPodcastServerData } from './Podcast';
import { IPodcast } from '../../domain/models/Podcast.types';

export const toPodcastDomain = (podcast: IPodcastServerData): IPodcast => {
  return {
    id: podcast?.id,
    description: podcast.description,
    released: podcast.released,
    name: podcast.name,
  };
};

export const toPodcastCollectionDomain = (
  podcast: IPodcastServerData[],
): IPodcast[] => {
  return podcast.map((podcast) => ({
    id: podcast?.id,
    description: podcast.description,
    released: podcast.released,
    name: podcast.name,
  }));
};
