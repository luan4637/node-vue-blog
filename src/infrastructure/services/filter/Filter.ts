import { FindManyOptions } from "typeorm";
import { FilterInterface } from "./FilterInterface";

export class Filter implements FilterInterface
{
    getFindOptions(): FindManyOptions {
        const findOptions: FindManyOptions = {};

        return findOptions;
    }
}