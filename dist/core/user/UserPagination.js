"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPagination = void 0;
const UserRepository_1 = require("../../core/user/UserRepository");
const Pagination_1 = require("../../infrastructure/services/pagination/Pagination");
class UserPagination extends Pagination_1.Pagination {
    constructor() {
        super(new UserRepository_1.UserRepository());
    }
}
exports.UserPagination = UserPagination;
