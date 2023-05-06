import { Request, Response, NextFunction } from "express";
import { Room } from "../../models/room";
export default async function findCustomerInRoom(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const findCustomer = await Room.findOne({ _id: req.body.roomId });

        if (!findCustomer) {
            res.status(404).json({
                msg: "not found room",
            });
        } else {
            const fillCustomer = findCustomer.customers.filter((customer) => {
                if (customer === req.body.customerId) {
                    return true;
                } else {
                    return false;
                }
            });

            if (fillCustomer.length > 0) {
                res.status(400).json({
                    msg: "this customer was alived in this room",
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "internal error at findCustomerRoom middlewares",
        });
    }
}
