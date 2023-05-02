import express from "express";
import { Customer } from "../../../models/customer";

export default async function newCustomer(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    try {
        const { customer } = req.body;
        const newCustomer = new Customer({ ...customer });
        newCustomer.permission = "user";
        newCustomer.save();
        res.status(200).json({
            msg: "create new Customer",
        });
    } catch (error) {
        console.log(error);
    }
}
