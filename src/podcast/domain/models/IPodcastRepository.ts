import { IPodcast } from './Podcast.types';

export interface IPodcastRepository {
  getPodcast(id: string): Promise<IPodcast>;
  getPodcastCollections(): Promise<IPodcast[]>;
}
