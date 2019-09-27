import { User } from '../domain/user.model';
import { USERS } from '../mocks/user.mock';

export const findAll = (req: any, res: any) => {
  res.json(USERS);
  return;
};
export const findById = (req: any, res: any) => {
  res.json(USERS.find((e: User) => e.id === req.params.id));
  return;
};
