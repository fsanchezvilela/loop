import { IPodcast } from './Podcast.types';

export class Podcast implements IPodcast {
  id: IPodcast['id'];
  description: number;
  released: string;
  name: string;

  constructor(podcast: IPodcast) {
    this.id = podcast.id;
    this.description = podcast.description;
    this.released = podcast.released;
    this.name = podcast.name;
  }
}
