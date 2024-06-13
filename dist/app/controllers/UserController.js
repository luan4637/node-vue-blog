"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const BaseController_1 = require("./base/BaseController");
const UserRepository_1 = require("../../core/user/UserRepository");
const UserFilter_1 = require("../../core/user/UserFilter");
const md5 = require('md5');
class UserController extends BaseController_1.BaseController {
    constructor(req, res) {
        super(req, res);
        this.userRepository = new UserRepository_1.UserRepository();
    }
    index() {
        const query = JSON.parse(JSON.stringify(this.req.query));
        const userFilter = new UserFilter_1.UserFilter(query);
        const results = this.userRepository.paging(userFilter);
        this.jsonResponse(results);
    }
    login() {
        const email = this.req.body.email;
        const password = this.req.body.password;
        const user = this.userRepository.findByEmail(email, md5(password));
        this.jsonResponse(user);
    }
    getOne() {
        const id = parseInt(this.req.params.id);
        const user = this.userRepository.findById(id);
        this.jsonResponse(user);
    }
    create() {
        const body = this.req.body;
        body.password = md5(body.password);
        const user = this.userRepository.save(body);
        this.jsonResponse(user);
    }
    update() {
        const id = parseInt(this.req.params.id);
        const body = this.req.body;
        if (body.password) {
            body.password = md5(body.password);
        }
        const user = this.userRepository.update(id, body);
        this.jsonResponse(user);
    }
    delete() {
        const id = parseInt(this.req.params.id);
        const user = this.userRepository.delete(id);
        this.jsonResponse(user);
    }
}
exports.UserController = UserController;
