"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostFilter = void 0;
const typeorm_1 = require("typeorm");
class PostFilter {
    constructor(query) {
        this.query = query;
    }
    getTitle() {
        return this.query.title;
    }
    getContent() {
        return this.query.content;
    }
    getPublished() {
        return this.query.published;
    }
    getPosition() {
        return this.query.position;
    }
    getOwnerId() {
        return this.query.ownerId;
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
        if (this.getTitle() !== undefined) {
            whereClauses.title = (0, typeorm_1.Like)(`%${this.getTitle()}%`);
        }
        if (this.getPublished() !== undefined) {
            whereClauses.published = this.getPublished();
        }
        if (this.getPosition() !== undefined) {
            whereClauses.position = this.getPosition();
        }
        const findOptions = {
            take: limit,
            skip: (page - 1) * limit,
            where: whereClauses
        };
        return findOptions;
    }
}
exports.PostFilter = PostFilter;
