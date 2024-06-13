"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFilter = void 0;
const typeorm_1 = require("typeorm");
class UserFilter {
    constructor(query) {
        this.query = query;
    }
    getFirstName() {
        return this.query.firstName;
    }
    getLastName() {
        return this.query.lastName;
    }
    getEmail() {
        return this.query.email;
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
        if (this.getFirstName() !== undefined) {
            whereClauses.firstName = (0, typeorm_1.Like)(`%${this.getFirstName()}%`);
        }
        if (this.getLastName() !== undefined) {
            whereClauses.lastName = (0, typeorm_1.Like)(`%${this.getLastName()}%`);
        }
        if (this.getEmail() !== undefined) {
            whereClauses.email = (0, typeorm_1.Like)(`%${this.getEmail()}%`);
        }
        const findOptions = {
            take: limit,
            skip: (page - 1) * limit,
            where: whereClauses
        };
        return findOptions;
    }
}
exports.UserFilter = UserFilter;
