import { Request, Response } from "express";
import { Customer } from "../../../models/customer";
import { Admin } from "../../../models/admin";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const HAST_BCRYPT = process.env.HASH_BCRYPT;
const TOKEN_KEY = process.env.TOKEN_KEY;
export default async function login(req: Request, res: Response) {
  if (!HAST_BCRYPT || !TOKEN_KEY) {
    res.status(500).send("process env is error dont suceess");
  } else {
    try {
      const { userLogin } = req.body;

      // find customer for find in admin collections
      const findCustomer = await Customer.findOne({
        first_name: userLogin.first_name,
        last_name: userLogin.last_name,
      });

      if (!findCustomer) {
        res.status(401).send("do not have this firstName and lastName");
      } else {
        // find admin
        const findAdmin = await Admin.findOne({
          customer: findCustomer._id,
        });

        if (!findAdmin) {
          res.status(404).send("not found this user");
        } else {
          // compare processing
          const comparePassword = await bcrypt.compare(
            userLogin.password,
            findAdmin.password,
          );

          // compare check
          if (!comparePassword) {
            res.status(400).json({
              msg: "login fuck",
            });
          } else {
            // create token
            const token = jwt.sign(
              {
                AID: findAdmin._id,
                password: findAdmin.password,
              },
              TOKEN_KEY,
              { expiresIn: "2m" },
            );

            //response
            res.status(200).header({ "access-token": token }).json({
              msg: "login successfully",
            });
          }
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("internal error at register controller");
    }
  }
}
