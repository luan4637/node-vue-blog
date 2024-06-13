import { Router, Request, Response } from 'express';
import { CategoryController } from '../controllers/CategoryController';

export const categoryPage = Router();


categoryPage.get('/category/', (req: Request, res: Response, next) => {
    const categoryController = new CategoryController(req, res);
    categoryController.index();
});

categoryPage.get('/category/:id', (req: Request, res: Response, next) => {
    const categoryController = new CategoryController(req, res);
    categoryController.getOne();
});

categoryPage.post('/category/create', (req: Request, res: Response, next) => {
    const categoryController = new CategoryController(req, res);
    categoryController.create();
});

categoryPage.post('/category/update/:id', (req: Request, res: Response, next) => {
    const categoryController = new CategoryController(req, res);
    categoryController.update();
});

categoryPage.post('/category/delete/:id', (req: Request, res: Response, next) => {
    const categoryController = new CategoryController(req, res);
    categoryController.delete();
});
