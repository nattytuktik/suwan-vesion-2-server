import express from "express";
import { Room } from "../../../models/room";

export default async function pushCustomerToRoom(
    req: express.Request,
    res: express.Response,
) {
    try {
        const { customerId, roomId } = req.body;
        if (!customerId && !roomId) {
            res.status(400).json({
                msg: "customerId or mitorId not found in request.body",
            });
        } else {
            const customer = {
                customerId: customerId,
                time_alive: Date.now(),
                status: "alive",
            };

            // push the customer to the database!
            const pushCustomer = await Room.findOneAndUpdate(
                { _id: roomId },
                { $push: { customers: customerId } },
            );

            if (!pushCustomer) {
                res.status(404).json({
                    msg: "not found this room",
                });
            } else {
                res.status(200).json({
                    msg: "push custormer successfull",
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "internal error at pushCustomerToRoom controller",
        });
    }
}
