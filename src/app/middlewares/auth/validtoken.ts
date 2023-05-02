import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

const TOKEN_KEY = process.env.TOKEN_KEY;

export default async function validToken(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const TokenBeare = req.headers.authorization?.split(" ")[1] || "";

        if (!TokenBeare) {
            res.send("no token");
        } else {
            const decodetoken = jwt.decode(TokenBeare);
            if (typeof decodetoken === "object" && decodetoken !== null) {
                if (decodetoken.iat && decodetoken.exp) {
                    Date.now() >= decodetoken.exp * 1000
                        ? res.send("token broken")
                        : next();
                }
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "internal error at validtoken middlewares",
        });
    }
}
