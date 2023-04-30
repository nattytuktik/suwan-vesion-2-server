import { Router } from 'express';

export interface IRoutes {
  path: string;
  controllers: Array<{
    method: string;
    action: Router;
    middlewares: Array<Function>;
  }>;
}
