"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }
    jsonResponse(result) {
        result.then((data) => {
            this.res.json(data);
        }, (error) => {
            this.res.statusCode = 400;
            this.res.json(error);
        }).catch((error) => {
            console.log(error);
        });
    }
    jsonResponseCallback(result, callback) {
        result.then((data) => {
            this.res.json(data);
        }, (error) => {
            this.res.statusCode = 400;
            this.res.json(error);
        }).then(() => {
            callback;
        }).catch((error) => {
            console.log(error);
        });
    }
}
exports.BaseController = BaseController;
