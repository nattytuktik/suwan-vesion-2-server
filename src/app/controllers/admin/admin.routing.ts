import { IRoute } from '../../../interfaces/IRoutes';
import newAdmin from './post/newAdmin';

export const adminRouting: Array<IRoute> = [
  {
    path: '/newAdmin',
    controllers: [
      {
        method: 'post',
        action: newAdmin,
        middlewares: [],
      },
    ],
  },
];
