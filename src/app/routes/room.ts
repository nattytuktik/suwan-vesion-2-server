import { Router } from 'express';
import { registerRoutes } from '../../lib/routers/addRoutesToRouter';
import { roomRouting } from '../controllers/room/room.routing';

const router = Router();
const methods = ['get', 'post', 'put', 'delete'];

// room
registerRoutes(router, methods, roomRouting);

export default router;
