import { Request, Response } from "express";
import { BaseController } from "./base/BaseController";
import { UserRepository } from "../../core/user/UserRepository";
import { UserRepositoryInterface } from "../../core/user/UserRepositoryInterface";
import { UserModel } from "../../core/user/UserModel";
import { UserFilter } from "../../core/user/UserFilter";

const md5 = require('md5');

export class UserController extends BaseController
{
    private userRepository: UserRepositoryInterface;

    constructor(req: Request, res: Response)
    {
        super(req, res);
        this.userRepository = new UserRepository();
    }

    index()
    {
        const query = JSON.parse(JSON.stringify(this.req.query));
        const userFilter = new UserFilter(query);
        const results = this.userRepository.paging(userFilter);
        
        this.jsonResponse(results);
    }

    login()
    {
        const email = this.req.body.email;
        const password = this.req.body.password;
        const user: Promise<UserModel|null> = this.userRepository.findByEmail(email, md5(password));
        this.jsonResponse(user);
    }

    getOne()
    {
        const id: number = parseInt(this.req.params.id);
        const user: Promise<UserModel|null> = this.userRepository.findById(id);

        this.jsonResponse(user);
    }

    create()
    {
        const body = this.req.body;
        body.password = md5(body.password);
        const user: Promise<UserModel> = this.userRepository.save(body);

        this.jsonResponse(user);
    }

    update()
    {
        const id: number = parseInt(this.req.params.id);
        const body = this.req.body;
        if (body.password) {
            body.password = md5(body.password);
        }
        const user: Promise<UserModel|null> = this.userRepository.update(id, body);
        
        this.jsonResponse(user);
    }

    delete()
    {
        const id: number = parseInt(this.req.params.id);
        const user: Promise<UserModel|null> = this.userRepository.delete(id);
        
        this.jsonResponse(user);
    }
}