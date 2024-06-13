import { Like, FindManyOptions, FindOperator } from "typeorm";
import { FilterInterface } from "../../infrastructure/services/filter/FilterInterface";

export class PostFilter implements FilterInterface
{
    private query: PostFilterQuery;

    constructor(query: PostFilterQuery)
    {
        this.query = query;
    }

    getTitle(): string
    {
        return this.query.title;
    }

    getContent(): string
    {
        return this.query.content;
    }

    getPublished(): boolean
    {
        return this.query.published;
    }

    getPosition(): string
    {
        return this.query.position;
    }

    getOwnerId(): number
    {
        return this.query.ownerId;
    }

    getPage(): number
    {
        return this.query.page;
    }

    getLimit(): number
    {
        return this.query.limit;
    }

    getFindOptions(): FindManyOptions
    {
        const limit:number = this.getLimit() ?? 10;
        const page:number = this.getPage() > 0 ? this.getPage() : 1;

        let whereClauses = <OperatorWhereClauses>{}
        if (this.getTitle() !== undefined) {
            whereClauses.title = Like(`%${this.getTitle()}%`);
        }
        if (this.getPublished() !== undefined) {
            whereClauses.published = this.getPublished();
        }
        if (this.getPosition() !== undefined) {
            whereClauses.position = this.getPosition();
        }

        const findOptions: FindManyOptions = {
            take: limit,
            skip: (page - 1) * limit,
            where: whereClauses
        };

        return findOptions;
    }
}

interface OperatorWhereClauses {
    title: FindOperator<string>,
    published: boolean,
    position: string
}

interface PostFilterQuery {
    title: string;
    content: string;
    published: boolean;
    position: string;
    ownerId: number;
    page: number;
    limit: number;
}