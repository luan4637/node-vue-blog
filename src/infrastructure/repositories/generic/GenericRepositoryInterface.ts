import { FindOptionsWhere } from 'typeorm';
import { PaginationResult } from '../../services/pagination/PaginationResult';
import { FilterInterface } from '../../services/filter/FilterInterface';

export interface GenericRepositoryInterface<T>
{
    findAll(): Promise<T[]>;

    find(take?: number, skip?: number): Promise<[T[], number]>;

    paging(filter: FilterInterface): Promise<PaginationResult<T>>;

    findOne(where: FindOptionsWhere<T>): Promise<T|null>;

    findById(id: number): Promise<T|null>;

    save(item: T): Promise<T>;

    update(id: number, newItem: T): Promise<T|null>;

    delete(id: number): Promise<T|null>;
}