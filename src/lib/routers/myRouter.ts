import { Router } from "express";
import { IRoute } from "../../interfaces/IRoutes";

export default class MyRouter {
    private router = Router();
    private mapRoutes: Array<IRoute>;

    constructor(mapRoutes: Array<IRoute>) {
        this.mapRoutes = mapRoutes;
    }

    getRouter() {
        return this.router;
    }

    private registerRouter() {}
}
