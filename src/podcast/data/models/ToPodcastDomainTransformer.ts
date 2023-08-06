import { IPodcastServerData } from './Podcast';
import { IPodcast } from '../../domain/models/Podcast.types';

export const toPodcastDomain = (podcast: IPodcastServerData): IPodcast => {
  return {
    id: podcast?.id,
  };
};
