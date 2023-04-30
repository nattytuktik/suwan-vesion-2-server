import { Request, Response, NextFunction } from 'express';

export const test = (req: Request, res: Response, next: NextFunction) => {
  const name: string = req.body.name;
  req.body.name = name.toUpperCase();
  next();
};
