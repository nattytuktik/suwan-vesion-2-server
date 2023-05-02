import { Router } from "express";
import { adminRouting } from "../controllers/admin/admin.routing";
import { registerRoutes } from "../../lib/routers/addRoutesToRouter";
const router = Router();

registerRoutes(router, ["post", "get", "put", "delete"], adminRouting);

export default router;
