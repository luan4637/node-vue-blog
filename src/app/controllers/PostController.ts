import { Request, Response } from "express";
import { BaseController } from "./base/BaseController";
import { PostRepository } from "../../core/post/PostRepository";
import { PostRepositoryInterface } from "../../core/post/PostRepositoryInterface";
import { PostModel } from "../../core/post/PostModel";
import { PostFilter } from "../../core/post/PostFilter";

export class PostController extends BaseController
{
    private postRepository: PostRepositoryInterface;

    constructor(req: Request, res: Response)
    {
        super(req, res);
        this.postRepository = new PostRepository();
    }

    index()
    {
        const query = JSON.parse(JSON.stringify(this.req.query));
        const postFilter = new PostFilter(query);
        const results = this.postRepository.paging(postFilter);
        
        this.jsonResponse(results);
    }

    getOne()
    {
        const id: number = parseInt(this.req.params.id);
        const post: Promise<PostModel|null> = this.postRepository.findById(id);

        this.jsonResponse(post);
    }

    getLatest()
    {
        const results = this.postRepository.getLatest(10);
        
        this.jsonResponse(results);
    }

    getFeature()
    {
        const results = this.postRepository.getFeature(3);
        
        this.jsonResponse(results);
    }

    create()
    {
        const body = this.req.body;
        body.slug = body.title.replace(/\s+/g, '-').toLowerCase();
        body.ownerId = 1;
        const post: Promise<PostModel> = this.postRepository.save(body);

        this.jsonResponse(post);
    }

    update()
    {
        const id: number = parseInt(this.req.params.id);
        const body = this.req.body;
        body.slug = body.title.replace(/\s+/g, '-').toLowerCase();
        body.ownerId = 1;
        const post: Promise<PostModel|null> = this.postRepository.update(id, body);
        
        this.jsonResponse(post);
    }

    delete()
    {
        const id: number = parseInt(this.req.params.id);
        const post: Promise<PostModel|null> = this.postRepository.delete(id);
        
        this.jsonResponse(post);
    }
}