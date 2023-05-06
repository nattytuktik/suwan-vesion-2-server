import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export default async function tokenTime(req: Request, res: Response) {
    try {
        const TokenBeare = req.headers.authorization?.split(" ")[1] || "";

        if (!TokenBeare) {
            res.send("no token");
        } else {
            const decodetoken = jwt.decode(TokenBeare);
            if (typeof decodetoken === "object" && decodetoken !== null) {
                if (decodetoken.iat && decodetoken.exp) {
                    Date.now() >= decodetoken.exp * 1000
                        ? res.status(401).json({ msg: "token time out" })
                        : res.status(200).json({ msg: "token valid" });
                }
            }
        }
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            error: error.massage,
        });
    }
}
