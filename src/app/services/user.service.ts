import { User } from '../domain/user.model';
import { USERS } from '../mocks/user.mock';

export const selectAll = (): User[] => {
  return USERS;
};
export const selectById = (id: string): User | undefined => {
  return USERS.find((e: User) => e.id + '' === id + '');
};
export const insert = (item: User): void => {
  // TODO insert
  USERS.push(item);
  return;
};
export const update = (item: User): void => {
  // TODO update
  USERS.push(item);
  return;
};
export const erase = (id: string): void => {
  const item = USERS.find((e: User) => e.id + '' === id);
  // TODO delete
  USERS.shift();
  return;
};
