import { IPodcast } from '../../../../podcast/domain/models/Podcast.types';
import { HomeDataTableUIPersenter } from './interfaces';

export const toDataHomeComponentTablePresenter = (
  collection: IPodcast[],
): HomeDataTableUIPersenter[] =>
  collection.map((podcast) => ({
    id: podcast.id,
    description: podcast.description,
    name: podcast.name,
    released: podcast.released,
  }));
