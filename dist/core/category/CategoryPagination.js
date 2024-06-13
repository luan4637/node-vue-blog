"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryPagination = void 0;
const CategoryRepository_1 = require("../../core/category/CategoryRepository");
const Pagination_1 = require("../../infrastructure/services/pagination/Pagination");
class CategoryPagination extends Pagination_1.Pagination {
    constructor() {
        super(new CategoryRepository_1.CategoryRepository());
    }
}
exports.CategoryPagination = CategoryPagination;
