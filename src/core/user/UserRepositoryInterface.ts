import { UserModel } from "./UserModel";
import { GenericRepositoryInterface } from "../../infrastructure/repositories/generic/GenericRepositoryInterface";

export interface UserRepositoryInterface extends GenericRepositoryInterface<UserModel>
{
    findByEmail(email: string, password: string): Promise<UserModel|null>;
}