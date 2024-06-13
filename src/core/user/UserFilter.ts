import { Like, FindManyOptions, FindOperator } from "typeorm";
import { FilterInterface } from "../../infrastructure/services/filter/FilterInterface";

export class UserFilter implements FilterInterface
{
    private query: UserFilterQuery;

    constructor(query: UserFilterQuery)
    {
        this.query = query;
    }

    getFirstName(): string
    {
        return this.query.firstName;
    }

    getLastName(): string
    {
        return this.query.lastName;
    }

    getEmail(): string
    {
        return this.query.email;
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
        if (this.getFirstName() !== undefined) {
            whereClauses.firstName = Like(`%${this.getFirstName()}%`);
        }
        if (this.getLastName() !== undefined) {
            whereClauses.lastName = Like(`%${this.getLastName()}%`);
        }
        if (this.getEmail() !== undefined) {
            whereClauses.email = Like(`%${this.getEmail()}%`);
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
    firstName: FindOperator<string>,
    lastName: FindOperator<string>,
    email: FindOperator<string>
}

interface UserFilterQuery {
    firstName: string;
    lastName: string;
    email: string;
    page: number;
    limit: number;
}