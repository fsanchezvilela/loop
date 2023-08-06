import { type IPodcastRepository } from '../../domain/models/IPodcastRepository'
import { IPodcast } from '../../domain/models/Podcast.types'
import mockApi from '../api/mock'
import { toPodcastDomain } from '../models/ToPodcastDomainTransformer'

class PodcastRepository implements IPodcastRepository {
    getPodcast = async (id: string): Promise<IPodcast> => {
        try {
            const data = await mockApi(id)
            return toPodcastDomain(data)
        } catch (e) {
            throw new Error(e as string)
        }
    }
}

export default PodcastRepository