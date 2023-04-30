import { test } from '../../middlewares/test';
import many from './get/many';
import id from './get/id';
import { create } from './post/create';

export default [
  // get methods
  {
    path: '/',
    controllers: [
      {
        method: 'get',
        action: many.readAgregratefeild,
      },
      {
        method: 'post',
        action: create,
        middlewares: [test],
      },
    ],
  },
  {
    path: '/all',
    controller: [
      {
        method: 'get',
        action: many.readAllfeild,
      },
      {
        method: 'get',
        action: id.readAllfeild,
      },
    ],
  },
];
