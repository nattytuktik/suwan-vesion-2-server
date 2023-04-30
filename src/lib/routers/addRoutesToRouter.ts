import { Router } from 'express';
import { IRoutes } from '../../interfaces/IRoutes';

export function registerRoutes(router: Router, routes: Array<IRoutes>) {
  if (routes.length === 0 || !routes) {
    return;
  } else {
    const route = routes[0];
    routes.shift();

    route.controllers.forEach((controller) => {
      const method = controller.method;
      const middlewares = controller.middlewares;
      (router as any)[method](route.path, ...middlewares, controller.action);
    });
    registerRoutes(router, routes);
  }
}
