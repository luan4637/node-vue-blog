"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryFilter = void 0;
const typeorm_1 = require("typeorm");
class CategoryFilter {
    constructor(query) {
        this.query = query;
    }
    getName() {
        return this.query.name;
    }
    getDescription() {
        return this.query.description;
    }
    getPage() {
        return this.query.page;
    }
    getLimit() {
        return this.query.limit;
    }
    getFindOptions() {
        var _a;
        const limit = (_a = this.getLimit()) !== null && _a !== void 0 ? _a : 10;
        const page = this.getPage() > 0 ? this.getPage() : 1;
        let whereClauses = {};
        if (this.getName() !== undefined) {
            whereClauses.name = (0, typeorm_1.Like)(`%${this.getName()}%`);
        }
        if (this.getDescription() !== undefined) {
            whereClauses.description = (0, typeorm_1.Like)(`%${this.getDescription()}%`);
        }
        const findOptions = {
            take: limit,
            skip: (page - 1) * limit,
            where: whereClauses
        };
        return findOptions;
    }
}
exports.CategoryFilter = CategoryFilter;
