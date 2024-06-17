import { PostModel } from "./PostModel";
import { GenericRepositoryInterface } from "../../infrastructure/repositories/generic/GenericRepositoryInterface";

export interface PostRepositoryInterface extends GenericRepositoryInterface<PostModel>
{
    getLatest(total: number): Promise<PostModel[]>;

    getFeature(total: number): Promise<PostModel[]>;

    findByIdIncludeUser(id: number): Promise<PostModel|null>;
}