import Suwan from "./app/app";
import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
// import router
import adminRouter from "./app/routes/admin";
import roomRouter from "./app/routes/room";
import customerRouter from "./app/routes/customer";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || null;
const PORT = Number(process.env.PORT || 5002);

/**
 * SET UP MIDDLEWARES
 */
const suwan = new Suwan({ port: PORT });

suwan.initMiddlewares([
    express.json(),
    cors(),
    urlencoded({ extended: false }),
]);

/**
 * SET UP ROUTING
 */
suwan.initRouting([
    {
        endpoint: "/room",
        router: roomRouter,
    },
    {
        endpoint: "/admin",
        router: adminRouter,
    },
    {
        endpoint: "/customer",
        router: customerRouter,
    },
]);

/**
 * CONNECT DATABASE
 */
const connectDatabaseStatus = suwan.connectDatabase({
    uri: MONGO_URI,
    options: {},
});

/**
 *  START SERVER
 */
connectDatabaseStatus
    ? suwan.startServer()
    : console.log("server not exist and got error in server");
