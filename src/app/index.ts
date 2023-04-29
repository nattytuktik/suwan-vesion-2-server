import express, { Application, Router } from 'express'
import mongoose from 'mongoose';

export default class Suwan {
    public port = 5001;
    private app: Application

    // init
    constructor({ port }: { port: number }) {
        this.app = express();
    }

    initRouting(routers: Array<{ endpoint: string, router: Router }>) {
        for (let router of routers) {
            return this.app.use(router.endpoint, router.router);
        }
    }

    initMiddlewares(middlewares: Array<any>) {
        for (let middleware of middlewares) {
            return this.app.use(middleware)
        }
    }

    connectDatabase({ uri, options = {} }: { uri: string | null, options: {} }) {
        if (uri) {
            try {
                mongoose.connect(uri, options || {})
                return true
            } catch (error) {
                console.log('conect database error', error)
                return false
            }
        } else {
            console.log("uri for connect database not found")
            return false
        }
    }

    startServer() {
        this.app.listen(this.port, () => {
            console.log(`server start at http://localhost:${this.port}`);
        })
    }
}