import { Request, Response, NextFunction } from "express";
import { Room } from "../../models/room";

export default async function isOldRoom(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const { room } = req.body;

        if (!room) {
            res.status(400).json({ msg: "not found room feild" });
        } else {
            const findRoom = await Room.findOne({ ...room });

            if (findRoom) {
                res.status(400).json({
                    msg: "this room has recorded",
                });
            } else {
                next();
            }
        }
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            error: error.massage,
        });
    }
}
