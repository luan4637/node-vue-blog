import { Like, FindManyOptions, FindOperator } from "typeorm";
import { FilterInterface } from "../../infrastructure/services/filter/FilterInterface";

export class CategoryFilter implements FilterInterface
{
    private query: CategoryFilterQuery;

    constructor(query: CategoryFilterQuery)
    {
        this.query = query;
    }

    getName(): string
    {
        return this.query.name;
    }

    getDescription(): string
    {
        return this.query.description;
    }

    getShowInNav(): boolean
    {
        return this.query.showInNav;
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
        if (this.getName() !== undefined) {
            whereClauses.name = Like(`%${this.getName()}%`);
        }
        if (this.getDescription() !== undefined) {
            whereClauses.description = Like(`%${this.getDescription()}%`);
        }
        if (this.getShowInNav() !== undefined) {
            whereClauses.showInNav = this.getShowInNav();
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
    name: FindOperator<string>,
    description: FindOperator<string>,
    showInNav: boolean
}

interface CategoryFilterQuery {
    name: string;
    description: string;
    showInNav: boolean;
    page: number;
    limit: number;
}