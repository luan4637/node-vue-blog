import { CategoryRepositoryInterface } from "./CategoryRepositoryInterface";
import { CategoryModel } from "./CategoryModel";
import { GenericRepository } from "../../infrastructure/repositories/generic/GenericRepository";
import { AppDataSource } from "../../infrastructure/repositories/dataSource/AppDataSource";

export class CategoryRepository extends GenericRepository<CategoryModel> implements CategoryRepositoryInterface
{
    constructor() {
        super(AppDataSource.getRepository(CategoryModel));
    }
}