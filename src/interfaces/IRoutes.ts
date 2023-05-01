import { Application, Router } from 'express';

export interface IRoute {
  path: string;
  controllers: Array<{
    method: string;
    action: Function;
    middlewares: Array<Function>;
  }>;
}
