import { IPodcast } from "./Podcast.types";

export interface IPodcastRepository {
    getPodcast(): Promise<IPodcast>
}
