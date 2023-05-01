import { Request, Response } from 'express';
import { Customer } from '../../../models/customer';

import jsw from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export default async function (req: Request, res: Response) {
  try {
    const { customer } = req.body;
    const newAdmin = new Customer({ ...customer });

    const hashPassword = await bcrypt.hash(customer.password, 10);
    newAdmin.password = hashPassword;
    newAdmin.permission = 'admin';
    res.status(200).json(newAdmin);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
