import { Request, Response, NextFunction } from "express";

export default async function validRoomRequest(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const { room } = req.body;

        if (!room) {
            res.status(400).json({
                msg: "not found room in request.body",
            });
        } else {
            if (room.room > 5 || room.foor > 3 || room.section > 2) {
                res.status(400).json({
                    msg: "room not validate",
                });
            } else {
                next();
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error,
        });
    }
}
