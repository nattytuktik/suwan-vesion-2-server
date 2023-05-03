import { Request, Response, NextFunction } from "express";
import { Room } from "../../models/room";
export default async function findHasCustomerInRoom(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const findCustomer = await Room.findOne({
            _id: req.body.roomId,
        });

        if (!findCustomer) {
            res.status(404).json({
                msg: "not found room",
            });
        } else {
            // return array of customers found in the room
            const fillCustomer = findCustomer.customers.find((customer) => {
                if (customer.toHexString() === req.body.customerId) {
                    return true;
                } else {
                    return false;
                }
            });

            if (fillCustomer) {
                res.status(400).json({
                    msg: "this customer was alived in this room",
                });
            } else {
                next();
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "internal error at findCustomerRoom middlewares",
        });
    }
}
