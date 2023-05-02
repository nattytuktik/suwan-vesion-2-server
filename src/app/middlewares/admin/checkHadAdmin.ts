import { Request, Response, NextFunction } from "express";
import { Customer } from "../../models/customer";

export default async function chekHadAdmin(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const { customer, registorForm } = req.body;

        const findCustomer = await Customer.findOne({
            first_name: customer.first_name,
            last_name: customer.last_name,
        });

        if (!findCustomer) {
            next();
        } else {
            res.status(200).json({
                msg: "had this user in database",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "internal error at check admin midlewares",
        });
    }
}
