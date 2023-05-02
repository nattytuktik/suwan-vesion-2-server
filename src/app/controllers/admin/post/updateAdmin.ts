import { Request, Response } from "express";
import { Customer } from "../../../models/customer";
import { Admin } from "../../../models/admin";

export default async function updateAdmin(req: Request, res: Response) {
    try {
        const { oldadmin, newadmin } = req.body;
        const findAndSetAdmin = await Admin.findOneAndUpdate(
            { _id: oldadmin },
            { $set: { customer: newadmin } },
        );
        const findAndSetCustomer = await Customer.findOneAndUpdate(
            { _id: newadmin },
            { $set: { permission: "admin" } },
        );

        if (!findAndSetAdmin || !findAndSetCustomer) {
            res.status(404).json({
                msg: "not found oldadmin",
            });
        } else {
            findAndSetAdmin.save();
            findAndSetCustomer.save();
            res.status(200).json({
                msg: "update admin successfully",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "internal error in updateAdmin controller",
        });
    }
}
