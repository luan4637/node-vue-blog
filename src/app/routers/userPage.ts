import { Router, Request, Response } from 'express';
import { UserController } from '../controllers/UserController';

export const userPage = Router();


userPage.get('/user', (req: Request, res: Response, next) => {
    const userController = new UserController(req, res);
    userController.index();
});

userPage.get('/user/:id', (req: Request, res: Response, next) => {
    const userController = new UserController(req, res);
    userController.getOne();
});

userPage.post('/user/create', (req: Request, res: Response, next) => {
    const userController = new UserController(req, res);
    userController.create();
});

userPage.post('/user/update/:id', (req: Request, res: Response, next) => {
    const userController = new UserController(req, res);
    userController.update();
});

userPage.post('/user/delete/:id', (req: Request, res: Response, next) => {
    const userController = new UserController(req, res);
    userController.delete();
});

userPage.post('/user/login', (req: Request, res: Response, next) => {
    const userController = new UserController(req, res);
    userController.login();
});
