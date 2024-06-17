import { Request, Response } from "express";
import { BaseController } from "./base/BaseController";
import { PostRepository } from "../../core/post/PostRepository";
import { PostRepositoryInterface } from "../../core/post/PostRepositoryInterface";
import { PostModel } from "../../core/post/PostModel";
import { PostFilter } from "../../core/post/PostFilter";
import { extname } from "path";

const formidable = require('formidable');
const fs = require('fs');
const md5 = require('md5');

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
        const post: Promise<PostModel|null> = this.postRepository.findByIdIncludeUser(id);

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
        const post: Promise<PostModel> = this.postRepository.save(body);

        this.jsonResponse(post);
    }

    update()
    {
        const _this = this;
        const id: number = parseInt(this.req.params.id);
        let form = new formidable.IncomingForm();
        form.parse(this.req, function (err: any, fields: any, files: any) {
            let pictureName = '';
            if (files.file) {
                pictureName = Date.now().toString() + files.file[0].originalFilename;
                pictureName = '/upload/' + md5(pictureName) + extname(pictureName);
                fs.rename(files.file[0].filepath, '.' + pictureName, function (err: any) {
                    if (err) {
                        throw err;
                    }
                });
            }
            let body: any = {};
            for (let key in fields) {
                body[key] = fields[key][0];
            }
            body.id = id;
            body.slug = body.title.replace(/\s+/g, '-').toLowerCase();
            body.published = body.published == 'true' ? true : false;
            body.user = JSON.parse(body.user);
            body.categories = JSON.parse(body.categories);
            body.picture = pictureName;
            
            const post: Promise<PostModel|null> = _this.postRepository.update(id, body);
            _this.jsonResponse(post);
        });
    }

    delete()
    {
        const id: number = parseInt(this.req.params.id);
        const post: Promise<PostModel|null> = this.postRepository.delete(id);
        
        this.jsonResponse(post);
    }
}