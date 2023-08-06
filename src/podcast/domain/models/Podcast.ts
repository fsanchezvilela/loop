import { IPodcast } from "./Podcast.types"

export class Podcast implements IPodcast {
  id: IPodcast['id']
  
  constructor(podcast: IPodcast) {
    this.id = podcast.id
  }
}
