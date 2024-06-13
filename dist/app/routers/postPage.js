"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postPage = void 0;
const express_1 = require("express");
const PostController_1 = require("../controllers/PostController");
exports.postPage = (0, express_1.Router)();
exports.postPage.get('/post/', (req, res, next) => {
    const postController = new PostController_1.PostController(req, res);
    postController.index();
});
exports.postPage.get('/post/:id', (req, res, next) => {
    const postController = new PostController_1.PostController(req, res);
    postController.getOne();
});
exports.postPage.post('/post/create', (req, res, next) => {
    const postController = new PostController_1.PostController(req, res);
    postController.create();
});
exports.postPage.post('/post/update/:id', (req, res, next) => {
    const postController = new PostController_1.PostController(req, res);
    postController.update();
});
exports.postPage.post('/post/delete/:id', (req, res, next) => {
    const postController = new PostController_1.PostController(req, res);
    postController.delete();
});
exports.postPage.get('/post/getLatest', (req, res, next) => {
    const postController = new PostController_1.PostController(req, res);
    postController.getLatest();
});
exports.postPage.get('/post/getFeature', (req, res, next) => {
    const postController = new PostController_1.PostController(req, res);
    postController.getFeature();
});
