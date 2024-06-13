import { Router, Request, Response } from 'express';
import { PostController } from '../controllers/PostController';

export const postPage = Router();


postPage.get('/post/', (req: Request, res: Response, next) => {
    const postController = new PostController(req, res);
    postController.index();
});

postPage.get('/post/:id', (req: Request, res: Response, next) => {
    const postController = new PostController(req, res);
    postController.getOne();
});

postPage.post('/post/create', (req: Request, res: Response, next) => {
    const postController = new PostController(req, res);
    postController.create();
});

postPage.post('/post/update/:id', (req: Request, res: Response, next) => {
    const postController = new PostController(req, res);
    postController.update();
});

postPage.post('/post/delete/:id', (req: Request, res: Response, next) => {
    const postController = new PostController(req, res);
    postController.delete();
});

postPage.get('/post/getLatest', (req: Request, res: Response, next) => {
    const postController = new PostController(req, res);
    postController.getLatest();
});

postPage.get('/post/getFeature', (req: Request, res: Response, next) => {
    const postController = new PostController(req, res);
    postController.getFeature();
});
