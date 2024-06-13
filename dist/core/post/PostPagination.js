"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostPagination = void 0;
const PostRepository_1 = require("../../core/post/PostRepository");
const Pagination_1 = require("../../infrastructure/services/pagination/Pagination");
class PostPagination extends Pagination_1.Pagination {
    constructor() {
        super(new PostRepository_1.PostRepository());
    }
}
exports.PostPagination = PostPagination;
