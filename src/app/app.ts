import express, { Application, Router } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

export default class Suwan {
    public port = 5001;
    private app: Application;

    // init
    constructor({ port }: { port: number }) {
        this.port = port;
        this.app = express();
    }

    initRouting(routers: Array<{ endpoint: string; router: Router }> | null) {
        if (routers) {
            for (let router of routers) {
                this.app.use(router.endpoint, router.router);
            }
        }
    }

    initMiddlewares(middlewares: Array<any>) {
        if (middlewares.length > 0) {
            for (let middleware of middlewares) {
                this.app.use(middleware);
            }
        }
    }

    connectDatabase({
        uri,
        options = {},
    }: {
        uri: string | null;
        options: {};
    }) {
        if (uri) {
            try {
                mongoose.connect(uri, options || {});
                return true;
            } catch (error) {
                console.log("conect database error", error);
                return false;
            }
        } else {
            console.log("uri for connect database not found");
            return false;
        }
    }

    startServer() {
        this.app.listen(this.port, () => {
            console.log(`server start at http://localhost:${this.port}`);
        });
    }
}
