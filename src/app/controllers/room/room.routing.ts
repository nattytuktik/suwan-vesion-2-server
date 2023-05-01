import { test } from '../../middlewares/test';
import many from './get/many';
import id from './get/id';
import create from './post/create';
import { IRoute } from '../../../interfaces/IRoutes';

export const roomRouting: Array<IRoute> = [
  {
    path: '/',
    controllers: [
      {
        method: 'get',
        action: many.readAgregratefeild,
        middlewares: [],
      },
      {
        method: 'post',
        action: create,
        middlewares: [],
      },
    ],
  },
];
