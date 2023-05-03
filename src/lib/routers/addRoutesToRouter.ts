import { Router } from "express";
import { IRoute } from "../../interfaces/IRoutes";

export const registerRoutes = function (
    router: any,
    methods: Array<string>,
    routes: Array<IRoute>,
) {
    if (!routes || routes.length === 0) {
        return;
    }

    const route = routes[0];
    routes.shift();

    methods.forEach((method) => {
        for (let controll of route.controllers) {
            if (controll.method === method) {
                router[method](
                    route.path,
                    ...(controll.middlewares || []),
                    controll.action,
                );
            }
        }
    });

    registerRoutes(router, methods, routes);
};
