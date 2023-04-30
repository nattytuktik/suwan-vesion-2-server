import { Application, Router } from 'express';
import { create } from '../controllers/room/post/create';
import { test } from '../middlewares/test';
import { registerRoutes } from '../../lib/routers/addRoutesToRouter';

import roomRouting from '../controllers/room/room.routing';

const router = Router();

export default router;
