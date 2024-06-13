"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const BaseController_1 = require("./base/BaseController");
const PostRepository_1 = require("../../core/post/PostRepository");
const PostFilter_1 = require("../../core/post/PostFilter");
class PostController extends BaseController_1.BaseController {
    constructor(req, res) {
        super(req, res);
        this.postRepository = new PostRepository_1.PostRepository();
    }
    index() {
        const query = JSON.parse(JSON.stringify(this.req.query));
        const postFilter = new PostFilter_1.PostFilter(query);
        const results = this.postRepository.paging(postFilter);
        this.jsonResponse(results);
    }
    getOne() {
        const id = parseInt(this.req.params.id);
        const post = this.postRepository.findById(id);
        this.jsonResponse(post);
    }
    getLatest() {
        const results = this.postRepository.getLatest(10);
        this.jsonResponse(results);
    }
    getFeature() {
        const results = this.postRepository.getFeature(3);
        this.jsonResponse(results);
    }
    create() {
        const body = this.req.body;
        body.slug = body.title.replace(/\s+/g, '-').toLowerCase();
        body.ownerId = 1;
        const post = this.postRepository.save(body);
        this.jsonResponse(post);
    }
    update() {
        const id = parseInt(this.req.params.id);
        const body = this.req.body;
        body.slug = body.title.replace(/\s+/g, '-').toLowerCase();
        body.ownerId = 1;
        const post = this.postRepository.update(id, body);
        this.jsonResponse(post);
    }
    delete() {
        const id = parseInt(this.req.params.id);
        const post = this.postRepository.delete(id);
        this.jsonResponse(post);
    }
}
exports.PostController = PostController;
