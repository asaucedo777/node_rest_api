import { Request, Response } from 'express';
import { User } from '../domain/user.model';
import { USERS } from '../mocks/user.mock';

export const getAll = (req: Request, res: Response): void => {
  const users = USERS;
  if (users === undefined || users.length === 0) {
    res.status(404).send({
      message: 'Not Found ',
    });
  } else {
    res.json(users);
  }
  return;
};
export const getById = (req: Request, res: Response): void => {
  const user = USERS.find((e: User) => e.id + '' === req.params.id);
  if (user === undefined || user.id === -1) {
    res.status(404).send({
      message: 'Not Found ' + req.params.id,
    });
  } else {
    res.json(user);
  }
  return;
};
export const create = (req: Request, res: Response): void => {
  if (!req.body) {
    res.status(400).send({
      message: 'Bad Request',
    });
  } else {
    const user = new User({
      id: req.body.id,
      name: req.body.name,
    });
    const users = USERS;
    users.push(user);
    res.status(201).send({
      message: 'Created',
      id: -1,
    });
  }
  return;
};
export const update = (req: Request, res: Response): void => {
  if (!req.body) {
    res.status(400).send({
      message: 'Bad Request',
    });
  } else {
    const user = new User({
      id: req.body.id,
      name: req.body.name,
    });
    // TODO Update
    USERS.push(user);
    res.status(200).send({
      message: 'Updated',
    });
  }
  return;
};
export const modify = (req: Request, res: Response): void => {
  if (!req.body) {
    res.status(400).send({
      message: 'Bad Request',
    });
  } else {
    const user = new User({
      id: req.body.id,
      name: req.body.name,
    });
    // TODO Patch
    USERS.push(user);
    res.status(200).send({
      message: 'Modified',
    });
  }
  return;
};
export const erase = (req: Request, res: Response): void => {
  const user = USERS.find((e: User) => e.id + '' === req.params.id);
  if (user === undefined || user.id === -1) {
    res.status(404).send({
      message: 'Not Found ' + req.params.id,
    });
  } else {
    // TODO Erase
    USERS.shift();
    res.status(204).send({
      message: 'No Content',
    });
  }
  return;
};
