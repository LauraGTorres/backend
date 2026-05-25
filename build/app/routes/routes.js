"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesApi = void 0;
const user_1 = require("./user/user");
class RoutesApi {
    constructor(app) {
        this._app = app;
        this.authRouter = new user_1.AuthRoutes();
        this.initRoutes();
    }
    initRoutes() {
        this._app.use('/api/v1/user', this.authRouter.router);
    }
}
exports.RoutesApi = RoutesApi;
//localhost:3000/api/v1/user/create
