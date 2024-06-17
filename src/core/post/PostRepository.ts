import { PostRepositoryInterface } from "./PostRepositoryInterface";
import { PostModel } from "./PostModel";
import { GenericRepository } from "../../infrastructure/repositories/generic/GenericRepository";
import { AppDataSource } from "../../infrastructure/repositories/dataSource/AppDataSource";
import { PostPosition } from "./PostPosition";

export class PostRepository extends GenericRepository<PostModel> implements PostRepositoryInterface
{
    constructor() {
        super(AppDataSource.getRepository(PostModel));
    }

    getLatest(total: number): Promise<PostModel[]> {
        return this.repository.find({
            order: {
                id: "DESC",
            },
            take: total
        });
    }

    getFeature(total: number): Promise<PostModel[]> {
        return this.repository.find({
            where: {
                position: PostPosition.FEATURE
            },
            order: {
                id: "DESC",
            },
            take: total
        });
    }

    findByIdIncludeUser(id: number): Promise<PostModel|null> {
        return this.repository.findOne({
            relations: ['user', 'categories'],
            where: {
                id: id
            }
        });
    }
}