"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepository = void 0;
const PostModel_1 = require("./PostModel");
const GenericRepository_1 = require("../../infrastructure/repositories/generic/GenericRepository");
const AppDataSource_1 = require("../../infrastructure/repositories/dataSource/AppDataSource");
const PostPosition_1 = require("./PostPosition");
class PostRepository extends GenericRepository_1.GenericRepository {
    constructor() {
        super(AppDataSource_1.AppDataSource.getRepository(PostModel_1.PostModel));
    }
    getLatest(total) {
        return this.repository.find({
            order: {
                id: "DESC",
            },
            take: total
        });
    }
    getFeature(total) {
        return this.repository.find({
            where: {
                position: PostPosition_1.PostPosition.FEATURE
            },
            order: {
                id: "DESC",
            },
            take: total
        });
    }
}
exports.PostRepository = PostRepository;
