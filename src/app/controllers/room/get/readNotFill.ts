import express from "express";
import { Room } from "../../../models/room";

export default async function readNotFill(
    req: express.Request,
    res: express.Response,
) {
    try {
        const readAllRoom = await Room.find({}).populate("mitor");
        res.status(200).json(readAllRoom);
    } catch (error) {
        console.log(error);
    }
}
