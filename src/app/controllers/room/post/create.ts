import { Request, Response } from 'express';
import { Room } from '../../../models/room';
import { Mitor } from '../../../models/mitor';
import { Custormer } from '../../../models/customer';

// create action
export const create = async (req: Request, res: Response) => {
  try {
    res.send(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
