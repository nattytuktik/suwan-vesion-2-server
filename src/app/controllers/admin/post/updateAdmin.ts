import { Request, Response } from "express";
import { Customer } from "../../../models/customer";
import { Admin } from "../../../models/admin";

const HAST_BCRYPT = process.env.HAST_BCRYPT || undefined;

export default async function updateAdmin(req: Request, res: Response) {
    try {
        const { oldadmin, newadmin } = req.body;
        const findAdmin = await Admin.findOneAndUpdate(
            { _id: oldadmin },
            { $set: { customer: newadmin } },
        );

        console.log(findAdmin);

        if (!findAdmin) {
            res.status(404).json({
                msg: "not found oldadmin",
            });
        } else {
            findAdmin.save();
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
