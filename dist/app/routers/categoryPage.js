"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryPage = void 0;
const express_1 = require("express");
const CategoryController_1 = require("../controllers/CategoryController");
exports.categoryPage = (0, express_1.Router)();
exports.categoryPage.get('/category/', (req, res, next) => {
    const categoryController = new CategoryController_1.CategoryController(req, res);
    categoryController.index();
});
exports.categoryPage.get('/category/:id', (req, res, next) => {
    const categoryController = new CategoryController_1.CategoryController(req, res);
    categoryController.getOne();
});
exports.categoryPage.post('/category/create', (req, res, next) => {
    const categoryController = new CategoryController_1.CategoryController(req, res);
    categoryController.create();
});
exports.categoryPage.post('/category/update/:id', (req, res, next) => {
    const categoryController = new CategoryController_1.CategoryController(req, res);
    categoryController.update();
});
exports.categoryPage.post('/category/delete/:id', (req, res, next) => {
    const categoryController = new CategoryController_1.CategoryController(req, res);
    categoryController.delete();
});
