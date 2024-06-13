import { FindManyOptions } from "typeorm";

export interface FilterInterface
{
    getFindOptions(): FindManyOptions;
}