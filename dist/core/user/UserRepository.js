"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const UserModel_1 = require("./UserModel");
const GenericRepository_1 = require("../../infrastructure/repositories/generic/GenericRepository");
const AppDataSource_1 = require("../../infrastructure/repositories/dataSource/AppDataSource");
class UserRepository extends GenericRepository_1.GenericRepository {
    constructor() {
        super(AppDataSource_1.AppDataSource.getRepository(UserModel_1.UserModel));
    }
    findByEmail(email, password) {
        return this.repository.findOne({ where: { email: email, password: password } });
    }
}
exports.UserRepository = UserRepository;
