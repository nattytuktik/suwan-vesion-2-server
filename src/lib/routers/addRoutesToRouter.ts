import { Router } from 'express';
import { IRoute } from '../../interfaces/IRoutes';

// export function test (router: Router, routes: Array<IRoute>) {
//   if (routes.length === 0 || !routes) {
//     return;
//   } else {
//     const route = routes[0];
//     routes.shift();

//     route.controllers.forEach((controller) => {
//       const method = controller.method;
//       const middlewares = controller.middlewares;
//       (router as any)[method](route.path, ...middlewares, controller.action);
//     });
//     registerRoutes(router, routes);
//   }
// };

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
