import { IPodcast } from '../../domain/models/Podcast.types';

export interface IPodcastServerData extends Readonly<IPodcast> {
  id: IPodcast['id'];
}
