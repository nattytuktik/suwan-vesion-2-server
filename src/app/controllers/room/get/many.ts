import { Request, Response } from 'express';

const readAgregratefeild = (req: Request, res: Response) => {
  res.send('test');
};
const readAllfeild = (req: Request, res: Response) => {
  res.send('testdf sdfsdf');
};

export default {
  readAgregratefeild,
  readAllfeild,
};
