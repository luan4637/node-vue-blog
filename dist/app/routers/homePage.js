"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homePage = void 0;
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const path = require('path');
const rootPath = path.resolve('./');
exports.homePage = (0, express_2.Router)();
exports.homePage.use(express_1.default.static(rootPath + '/dist/public/'));
exports.homePage.get('/', (req, res, next) => {
    res.sendFile(rootPath + '/dist/public/' + 'index.html');
});
exports.homePage.use(express_1.default.static(rootPath + '/dist/publicadmin/'));
exports.homePage.get('/admin', (req, res, next) => {
    res.sendFile(rootPath + '/dist/publicadmin/' + 'index.html');
});
