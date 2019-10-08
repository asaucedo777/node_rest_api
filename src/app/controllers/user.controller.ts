import { Request, Response, Router } from 'express';
import { Connection, getRepository } from 'typeorm';

import { NextFunction } from 'connect';
import IController from '../controller.interface';
import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';
import { UserService } from '../services/user.service';

export class UserController implements IController {
  public router: Router;
  public service: UserService;
  public connection: Connection;
  constructor(connection: Connection) {
    this.router = Router();
    this.router.get('/users', this.getAll);
    this.router.get('/users/:id', this.getById);
    this.router.post('/users', this.create);
    this.router.put('/users', this.update);
    this.router.patch('/users', this.modify);
    this.router.delete('/users/:id', this.remove);
    this.service = new UserService(connection);
    this.connection = connection;
  }
  static staticGetAll = async (req: Request, res: Response) => {
    const repository = getRepository(User);
    const users = await repository.find();
    res.send(users);
  }
  static staticGetById = async (req: Request, res: Response, next: NextFunction) => {
    const repository = getRepository(User);
    repository
      .findByIds([req.params.id])
      .then((result) => {
        if (result === undefined || result.length === 0) {
          res.status(404).send({
            message: 'Not found ' + req.params.id,
          });
        } else {
          res.json(result);
        }
      })
      .catch((error) => {
        console.log('Error en getById: ', error);
      });
  }
  static staticCreate = async (req: Request, res: Response) => {
    if (!req.body) {
      res.status(400).send({
        message: 'Bad Request',
      });
    } else {
      const userCreate = new User();
      userCreate.id = req.body.id;
      userCreate.name = req.body.name;
      const repository = getRepository(User);
      repository
          .insert(userCreate)
        .then((result) => {
          if (result === undefined) {
            res.status(404).send({
              message: 'Not Found ' + req.params.id,
            });
          } else {
            res.status(201).send({
              message: 'Created',
              id: result.identifiers[0].id,
            });
          }
        })
        .catch((error) => {
          console.log('Error en getById: ', error);
        });
    }
    return;
  }
  static staticUpdate = async (req: Request, res: Response) => {
    if (!req.body) {
      res.status(400).send({
        message: 'Bad Request',
      });
    } else {
      const userUpdate = new User();
      userUpdate.id = req.body.id;
      userUpdate.name = req.body.name;
      const repository = getRepository(User);
      repository
          .update(userUpdate.id, userUpdate)
        .then((result) => {
          if (result === undefined) {
            res.status(404).send({
              message: 'Not Found ' + req.params.id,
            });
          } else {
            res.status(200).send({
              message: 'Updated',
              id: req.params.id,
            });
          }
        })
        .catch((error) => {
          console.log('Error en update: ', error);
        });
    }
    return;
  }
  static staticModify = async (req: Request, res: Response) => {
    if (!req.body) {
      res.status(400).send({
        message: 'Bad Request',
      });
    } else {
      const userUpdate = new User();
      userUpdate.id = req.body.id;
      userUpdate.name = req.body.name;
      const repository = getRepository(User);
      repository
          .save(userUpdate)
        .then((result) => {
          if (result === undefined) {
            res.status(404).send({
              message: 'Not Found ' + req.params.id,
            });
          } else {
            res.status(200).send({
              message: 'Updated',
              id: req.params.id,
            });
          }
        })
        .catch((error) => {
          console.log('Error en update: ', error);
        });
    }
    return;
  }
  static staticRemove = async (req: Request, res: Response) => {
    const repository = getRepository(User);
    repository
      .findByIds([req.params.id])
      .then((result) => {
        if (result === undefined || result.length !== 1) {
          res.status(404).send({
            message: 'Not Found ' + req.params.id,
          });
        } else {
          const userRemove = new User();
          userRemove.id = result[0].id;
          userRemove.name = result[0].name;
          const repository2 = getRepository(User);
          repository2
                  .remove(userRemove)
            .then((result2) => {
              if (result2 === undefined) {
                res.status(404).send({
                  message: 'Not Found ' + req.params.id,
                });
              } else {
                res.status(204).send({
                  message: 'Removed',
                  id: req.params.id,
                });
              }
            })
            .catch((error) => {
              console.log('Error en remove: ', error);
            });
        }
      });
    return;
  }
  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    this.connection
      .getCustomRepository(UserRepository)
      .find()
      .then((result) => {
        console.log('Resultado: ', result);
        if (result === undefined || result.length === 0) {
          res.status(404).send({
            message: 'Not Found ',
          });
        } else {
          res.json(result);
        }
      })
      .catch((error) => {
        console.log('Error en getAll: ', error);
      });
    return;
  }
  public getById = async (req: Request, res: Response, next: NextFunction) => {
    this.connection
      .getCustomRepository(UserRepository)
      .findByIds([req.params.id])
      .then((result) => {
        if (result === undefined || result.length === 0) {
          res.status(404).send({
            message: 'Not found ' + req.params.id,
          });
        } else {
          res.json(result);
        }
      })
      .catch((error) => {
        console.log('Error en getById: ', error);
      });
  }
  public create = async (req: Request, res: Response) => {
    if (!req.body) {
      res.status(400).send({
        message: 'Bad Request',
      });
    } else {
      const userCreate = new User();
      userCreate.id = req.body.id;
      userCreate.name = req.body.name;
      this.connection
        .getCustomRepository(UserRepository)
        .insert(userCreate)
        .then((result) => {
          if (result === undefined) {
            res.status(404).send({
              message: 'Not Found ' + req.params.id,
            });
          } else {
            res.status(201).send({
              message: 'Created',
              id: result.identifiers[0].id,
            });
          }
        })
        .catch((error) => {
          console.log('Error en getById: ', error);
        });
    }
    return;
  }
  public update = async (req: Request, res: Response) => {
    if (!req.body) {
      res.status(400).send({
        message: 'Bad Request',
      });
    } else {
      const userUpdate = new User();
      userUpdate.id = req.body.id;
      userUpdate.name = req.body.name;
      this.connection
        .getCustomRepository(UserRepository)
        .update(userUpdate.id, userUpdate)
        .then((result) => {
          if (result === undefined) {
            res.status(404).send({
              message: 'Not Found ' + req.params.id,
            });
          } else {
            res.status(200).send({
              message: 'Updated',
              id: req.params.id,
            });
          }
        })
        .catch((error) => {
          console.log('Error en update: ', error);
        });
    }
    return;
  }
  public modify = async (req: Request, res: Response) => {
    if (!req.body) {
      res.status(400).send({
        message: 'Bad Request',
      });
    } else {
      const userUpdate = new User();
      userUpdate.id = req.body.id;
      userUpdate.name = req.body.name;
      this.connection
        .getCustomRepository(UserRepository)
        .save(userUpdate)
        .then((result) => {
          if (result === undefined) {
            res.status(404).send({
              message: 'Not Found ' + req.params.id,
            });
          } else {
            res.status(200).send({
              message: 'Updated',
              id: req.params.id,
            });
          }
        })
        .catch((error) => {
          console.log('Error en update: ', error);
        });
    }
    return;
  }
  public remove = async (req: Request, res: Response) => {
    this.connection
      .getCustomRepository(UserRepository)
      .findByIds([req.params.id])
      .then((result) => {
        if (result === undefined || result.length !== 1) {
          res.status(404).send({
            message: 'Not Found ' + req.params.id,
          });
        } else {
          const userRemove = new User();
          userRemove.id = result[0].id;
          userRemove.name = result[0].name;
          this.connection
            .getCustomRepository(UserRepository)
            .remove(userRemove)
            .then((result2) => {
              if (result2 === undefined) {
                res.status(404).send({
                  message: 'Not Found ' + req.params.id,
                });
              } else {
                res.status(204).send({
                  message: 'Removed',
                  id: req.params.id,
                });
              }
            })
            .catch((error) => {
              console.log('Error en remove: ', error);
            });
        }
      });
    return;
  }

}
