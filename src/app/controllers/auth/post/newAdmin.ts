import { Request, Response } from "express";
import { Customer } from "../../../models/customer";
import bcrypt from "bcrypt";
import { Admin } from "../../../models/admin";
import dotenv from "dotenv";

dotenv.config();
const HASH_BCRYPT = process.env.HASH_BCRYPT;

export default async function newAdmin(req: Request, res: Response) {
    /*
     * res 500 for process.env not success!
     */

    if (!HASH_BCRYPT) {
        res.status(500).send("process env is error");
    } else {
        try {
            const { customer, registorForm } = req.body;

            // insert feild that not proceessing first!
            const newCustomer = new Customer({ ...customer });
            const newAdmin = new Admin();

            // hashing password
            const hashPassword = await bcrypt.hash(
                registorForm.password,
                parseInt(HASH_BCRYPT),
            );

            // setting prrmission admin for customer has been admin
            newCustomer.permission = "admin";

            //setting customerId and password for new Admin
            newAdmin.customer = newCustomer._id;
            newAdmin.password = hashPassword;

            Promise.all([newAdmin.save(), newCustomer.save()])
                .then(() => {
                    res.status(200).json({
                        msg: "admin is created",
                    });
                })
                .catch((error) => {
                    console.log(error);
                    res.send("got error on save");
                });
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
}
