"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPage = void 0;
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
exports.userPage = (0, express_1.Router)();
exports.userPage.get('/user', (req, res, next) => {
    const userController = new UserController_1.UserController(req, res);
    userController.index();
});
exports.userPage.get('/user/:id', (req, res, next) => {
    const userController = new UserController_1.UserController(req, res);
    userController.getOne();
});
exports.userPage.post('/user/create', (req, res, next) => {
    const userController = new UserController_1.UserController(req, res);
    userController.create();
});
exports.userPage.post('/user/update/:id', (req, res, next) => {
    const userController = new UserController_1.UserController(req, res);
    userController.update();
});
exports.userPage.post('/user/delete/:id', (req, res, next) => {
    const userController = new UserController_1.UserController(req, res);
    userController.delete();
});
exports.userPage.post('/user/login', (req, res, next) => {
    const userController = new UserController_1.UserController(req, res);
    userController.login();
});
