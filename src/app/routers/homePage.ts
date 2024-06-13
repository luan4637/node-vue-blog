import express from 'express';
import { Router, Request, Response } from 'express';

const path = require('path');
const rootPath = path.resolve('./');

export const homePage = Router();

homePage.use(express.static(rootPath + '/dist/public/'));
homePage.get('/', (req: Request, res: Response, next) => {
    res.sendFile(rootPath + '/dist/public/' + 'index.html');
});

homePage.use(express.static(rootPath + '/dist/publicadmin/'));
homePage.get('/admin', (req: Request, res: Response, next) => {
    res.sendFile(rootPath + '/dist/publicadmin/' + 'index.html');
});
