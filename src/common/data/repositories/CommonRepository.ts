import { ICommonRepository } from '../../domain/CommonRepository.interfaces';

export class CommonRepository implements ICommonRepository {
  get(): void {
    throw new Error('Method not implemented.');
  }
}
