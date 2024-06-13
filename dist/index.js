"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routers_1 = require("./app/routers");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT || '3000');
const hostname = process.env.HOST || 'localhost';
const cors = require('cors');
app.use(cors());
app.options('*', cors());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use('/', routers_1.routes);
app.listen(port, hostname, () => {
    console.log(`[server]: Server is running at http://${hostname}:${port}`);
});
