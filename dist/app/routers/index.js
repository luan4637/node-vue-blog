"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const homePage_1 = require("./homePage");
const userPage_1 = require("./userPage");
const postPage_1 = require("./postPage");
const categoryPage_1 = require("./categoryPage");
exports.routes = express_1.default.Router();
exports.routes.use(homePage_1.homePage);
exports.routes.use(userPage_1.userPage);
exports.routes.use(postPage_1.postPage);
exports.routes.use(categoryPage_1.categoryPage);
