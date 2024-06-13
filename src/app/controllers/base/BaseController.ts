import { Request, Response } from "express";

export class BaseController
{
    protected req: Request;
    protected res: Response;

    constructor(req: Request, res: Response)
    {
        this.req = req;
        this.res = res;
    }

    protected jsonResponse(result: Promise<any>)
    {
        result.then(
            (data: Promise<any>) => {
                this.res.json(data);
            }, 
            (error) => {
                this.res.statusCode = 400;
                this.res.json(error);
            }
        ).catch((error) => {
            console.log(error);
        });
    }

    protected jsonResponseCallback(result: Promise<any>, callback: Function)
    {
        result.then(
            (data: Promise<any>) => {
                this.res.json(data);
            }, 
            (error) => {
                this.res.statusCode = 400;
                this.res.json(error);
            }
        ).then(() => {
            callback;
        }).catch((error) => {
            console.log(error);
        });
    }
}