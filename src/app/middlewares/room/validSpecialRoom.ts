import { Request, Response, NextFunction } from "express";

export default async function validSpecialRoom(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const room = req.body.room;

        if (room.room == 0 && room.foor == 2) {
            res.status(400).json({
                msg: "this room not valid for this section",
            });
        } else {
            next();
        }
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            error: error.massage,
        });
    }
}
