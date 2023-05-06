import { Router } from "express";
import { adminRouting } from "../controllers/auth/admin.routing";
import { registerRoutes } from "../../lib/routers/addRoutesToRouter";
const router = Router();

registerRoutes(router, adminRouting);

export default router;
