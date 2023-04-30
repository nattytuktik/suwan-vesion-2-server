import { Request, Response } from 'express';
const readAgregratefeild = (req: Request, res: Response) => {
  res.send('readAgregratefeild');
};
const readAllfeild = (req: Request, res: Response) => {
  res.json({
    msg: 'dfasdf',
  });
};

export default {
  readAgregratefeild,
  readAllfeild,
};
