import { Request, Response } from "express";
import { Room } from "../../../models/room";
import { Mitor } from "../../../models/mitor";
import { Customer } from "../../../models/customer";

// create action
export default async function creteRoom(req: Request, res: Response) {
    try {
        const { mitor, room } = req.body;
        const newRoom = new Room({ ...room });
        const newMitor = new Mitor();
        newMitor.mitor.push({ ...mitor });
        newRoom.mitor = newMitor._id;

        newMitor.save();
        newRoom.save();
        res.status(200).json({
            msg: "create new room success fully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "internal error at createRoom controller",
        });
    }
}
