import { Request, Response } from "express";
import { BaseController } from "./base/BaseController";
import { CategoryRepository } from "../../core/category/CategoryRepository";
import { CategoryRepositoryInterface } from "../../core/category/CategoryRepositoryInterface";
import { CategoryModel } from "../../core/category/CategoryModel";
import { CategoryFilter } from "../../core/category/CategoryFilter";

export class CategoryController extends BaseController
{
    private categoryRepository: CategoryRepositoryInterface;

    constructor(req: Request, res: Response)
    {
        super(req, res);
        this.categoryRepository = new CategoryRepository();
    }

    index()
    {
        const query = JSON.parse(JSON.stringify(this.req.query));
        const categoryFilter = new CategoryFilter(query);
        const results = this.categoryRepository.paging(categoryFilter);
        
        this.jsonResponse(results);
    }

    getOne()
    {
        const id: number = parseInt(this.req.params.id);
        const category: Promise<CategoryModel|null> = this.categoryRepository.findById(id);

        this.jsonResponse(category);
    }

    create()
    {
        const body = this.req.body;
        const category: Promise<CategoryModel> = this.categoryRepository.save(body);

        this.jsonResponse(category);
    }

    update()
    {
        const id: number = parseInt(this.req.params.id);
        const category: Promise<CategoryModel|null> = this.categoryRepository.update(id, this.req.body);
        
        this.jsonResponse(category);
    }

    delete()
    {
        const id: number = parseInt(this.req.params.id);
        const category: Promise<CategoryModel|null> = this.categoryRepository.delete(id);
        
        this.jsonResponse(category);
    }
}