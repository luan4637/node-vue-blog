import { BaseEntity, DeleteResult, Repository, FindOptionsWhere } from 'typeorm';
import { GenericRepositoryInterface } from "./GenericRepositoryInterface";
import { PaginationResult } from '../../services/pagination/PaginationResult';
import { FilterInterface } from '../../services/filter/FilterInterface';

export abstract class GenericRepository<T extends BaseEntity> implements GenericRepositoryInterface<T>
{
    protected repository: Repository<T>;

    constructor(repository: Repository<T>) {
        this.repository = repository;
    }

    findAll(): Promise<T[]> {
        return this.repository.find();
    }

    find(take?: number, skip?: number): Promise<[T[], number]> {
        return this.repository.findAndCount({
            take: take ?? 10,
            skip: skip ?? 0
        });
    }

    async paging(filter: FilterInterface): Promise<PaginationResult<T>>
    {
        const [results, count] = await this.repository.findAndCount(filter.getFindOptions());

        const paginationResult: PaginationResult<T> = { data: results, total: count };

        return paginationResult;
    }

    findOne(where: FindOptionsWhere<T>): Promise<T|null> {
        return this.repository.findOneBy(where);
    }

    findById(id: number): Promise<T|null> {
        return this.repository.findOneById(id);
    }

    save(item: T): Promise<T> {
        return this.repository.save(item);
    }

    async update(id: number, newItem: T): Promise<T|null> {
        const item: T|null = await this.findById(id);

        if (item != null) {
            this.repository.merge(item, newItem);
            return await this.save(item);
        }

        return item;
    }

    async delete(id: number): Promise<T|null> {
        const item: T|null = await this.findById(id);

        if (item != null) {
            return await this.repository.remove(item);
        }

        return item;
    }
}