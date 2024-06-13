import { UserRepositoryInterface } from "./UserRepositoryInterface";
import { UserModel } from "./UserModel";
import { GenericRepository } from "../../infrastructure/repositories/generic/GenericRepository";
import { AppDataSource } from "../../infrastructure/repositories/dataSource/AppDataSource";

export class UserRepository extends GenericRepository<UserModel> implements UserRepositoryInterface
{
    constructor() {
        super(AppDataSource.getRepository(UserModel));
    }

    findByEmail(email: string, password: string): Promise<UserModel|null> {
        return this.repository.findOne({ where: { email: email, password: password } });
    }
}