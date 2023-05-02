import express from "express";
import { Customer } from "../../../models/customer";

export default async function readManyCustoemer(
    req: express.Request,
    res: express.Response,
) {
    try {
        const costomers = await Customer.find({});
        res.status(200).json(costomers);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "internal error at readManyCustomer controller",
        });
    }
}
