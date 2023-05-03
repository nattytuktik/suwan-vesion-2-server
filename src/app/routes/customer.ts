import { Router } from "express";
import { registerRoutes } from "../../lib/routers/addRoutesToRouter";
import { customerRouting } from "../controllers/customers/customer.routing";

const router = Router();

registerRoutes(router, customerRouting);

export default router;
