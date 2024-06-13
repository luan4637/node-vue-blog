"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
const CategoryModel_1 = require("./CategoryModel");
const GenericRepository_1 = require("../../infrastructure/repositories/generic/GenericRepository");
const AppDataSource_1 = require("../../infrastructure/repositories/dataSource/AppDataSource");
class CategoryRepository extends GenericRepository_1.GenericRepository {
    constructor() {
        super(AppDataSource_1.AppDataSource.getRepository(CategoryModel_1.CategoryModel));
    }
}
exports.CategoryRepository = CategoryRepository;
