import { Request, Response } from 'express';
export const getHome = (req: Request, res: Response) => {
  res.json({ message: 'Welcome to home!' });
  return;
};
