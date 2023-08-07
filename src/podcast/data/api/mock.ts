import { IPodcastServerData } from '../models/Podcast';
import { nanoid } from 'nanoid';

// Server mock
export async function mockApi(id: string): Promise<IPodcastServerData> {
  return new Promise((resolve, reject) => {
    try {
      resolve({
        id,
        description: Math.random() * 1000,
        released: 'pending',
        name: 'idk@example.com',
      });
    } catch (e) {
      reject({ data: null });
    }
  });
}
// Domain Presenter client ui mock
export async function getDataHomeTablePersenterApiMock(): Promise<
  IPodcastServerData[]
> {
  return new Promise((resolve, reject) => {
    resolve(
      new Array(50).fill(null).map(() => ({
        id: nanoid(),
        description: Math.random() * 1000,
        released: 'pending',
        name: 'idk@example.com',
      })),
    );
    reject([]);
  });
}
