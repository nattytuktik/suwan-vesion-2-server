import { Router } from "express";
import { registerRoutes } from "../../lib/routers/addRoutesToRouter";
import { roomRouting } from "../controllers/room/room.routing";
import create from "../controllers/room/post/create";

const router = Router();
const methods = ["get", "post", "put", "delete"];

// room
registerRoutes(router, roomRouting);

// router.post('/', create);
export default router;
