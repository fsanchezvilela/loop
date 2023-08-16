import { useEffect, useState } from 'react';
import { HomeDataTableUIPersenter } from '../../presenters/interfaces';
import PodcastRepository from '../../../../../podcast/data/repositories/PodcastRepository';
import { toDataHomeComponentTablePresenter } from '../../presenters';

const repository = new PodcastRepository();

const useHomeDataTable = (refetch = false): [HomeDataTableUIPersenter[]] => {
  const [data, setData] = useState<HomeDataTableUIPersenter[]>([]);
  useEffect(() => {
    repository
      .getPodcastCollections()
      .then((value) => setData(toDataHomeComponentTablePresenter(value)))
      .catch((error) => console.log(error));
    return;
  }, [refetch]);

  return [data];
};

export default useHomeDataTable;
