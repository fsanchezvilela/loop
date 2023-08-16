import { type IPodcastRepository } from '../../domain/models/PodcastRepository.interfaces';
import { IPodcast } from '../../domain/models/Podcast.types';
import {
  toPodcastCollectionDomain,
  toPodcastDomain,
} from '../models/ToPodcastDomainTransformer';
import { getDataHomeTablePersenterApiMock, mockApi } from '../api/mock';

class PodcastRepository implements IPodcastRepository {
  getPodcast = async (id: string): Promise<IPodcast> => {
    try {
      const data = await mockApi(id);
      return toPodcastDomain(data);
    } catch (e) {
      throw new Error(e as string);
    }
  };
  getPodcastCollections = async (): Promise<IPodcast[]> => {
    try {
      const data = await getDataHomeTablePersenterApiMock();
      return toPodcastCollectionDomain(data);
    } catch (e) {
      throw new Error(e as string);
    }
  };
}

export default PodcastRepository;
