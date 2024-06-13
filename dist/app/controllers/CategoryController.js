"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const BaseController_1 = require("./base/BaseController");
const CategoryRepository_1 = require("../../core/category/CategoryRepository");
const CategoryFilter_1 = require("../../core/category/CategoryFilter");
class CategoryController extends BaseController_1.BaseController {
    constructor(req, res) {
        super(req, res);
        this.categoryRepository = new CategoryRepository_1.CategoryRepository();
    }
    index() {
        const query = JSON.parse(JSON.stringify(this.req.query));
        const categoryFilter = new CategoryFilter_1.CategoryFilter(query);
        const results = this.categoryRepository.paging(categoryFilter);
        this.jsonResponse(results);
    }
    getOne() {
        const id = parseInt(this.req.params.id);
        const category = this.categoryRepository.findById(id);
        this.jsonResponse(category);
    }
    create() {
        const body = this.req.body;
        const category = this.categoryRepository.save(body);
        this.jsonResponse(category);
    }
    update() {
        const id = parseInt(this.req.params.id);
        const category = this.categoryRepository.update(id, this.req.body);
        this.jsonResponse(category);
    }
    delete() {
        const id = parseInt(this.req.params.id);
        const category = this.categoryRepository.delete(id);
        this.jsonResponse(category);
    }
}
exports.CategoryController = CategoryController;
