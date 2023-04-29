import Suwan from "./app";
import express, { urlencoded } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import roomRouting from "./app/controllers/room/room.routing";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || null;
const PORT = process.env.PORT || 5002;

const suwan = new Suwan({ port: 5001 });

/**
 * SET UP MIDDLEWARES
 */
suwan.initMiddlewares([
    express.json(),
    cors(),
    urlencoded({ extended: false }),
    dotenv.config()
])

/**
 * SET UP ROUTING
 */
suwan.initRouting(
    [
        {
            endpoint: '/',
            router: roomRouting
        }
    ]
)

/**
 * CONNECT DATABASE
 */
const connectDatabaseStatus = suwan.connectDatabase({ uri: MONGO_URI, options: {} })

/**
 *  START SERVER
 */
connectDatabaseStatus ?
    suwan.startServer() :
    console.log('server not exist and got error in server')