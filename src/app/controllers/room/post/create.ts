import { Request, Response } from 'express';
import { Room } from '../../../models/room';
import { Mitor } from '../../../models/mitor';
import { Customer } from '../../../models/customer';

// create action
export default async (req: Request, res: Response) => {
  try {
    const { customer, mitor, room } = req.body;
    const newRoom = new Room({ ...room });
    const newMitor = new Mitor();
    newMitor.mitor.push({ ...mitor });
    newRoom.mitor = newMitor._id;

    res.send('test api');
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
