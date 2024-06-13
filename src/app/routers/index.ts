import express from 'express';
import { homePage } from './homePage';
import { userPage } from './userPage';
import { postPage } from './postPage';
import { categoryPage } from './categoryPage';

export const routes = express.Router();

routes.use(homePage);
routes.use(userPage);
routes.use(postPage);
routes.use(categoryPage);
