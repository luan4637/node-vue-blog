import express from 'express';
import { Router, Request, Response } from 'express';

const path = require('path');
const rootPath = path.resolve('./');

export const uploadFile = Router();

uploadFile.use('/upload', express.static(rootPath + '/upload/'));
