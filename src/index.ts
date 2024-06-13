import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { routes } from "./app/routers";

dotenv.config();

const app: Express = express();
const port = parseInt(process.env.PORT || '3000');
const hostname = process.env.HOST || 'localhost';
const cors = require('cors');

app.use(cors());
app.options('*', cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', routes);

app.listen(port, hostname, () => {
    console.log(`[server]: Server is running at http://${hostname}:${port}`);
});