import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';

import { App } from './app/app';
import { UserController } from './app/controllers/user.controller';
import { config } from './ormconfig';

try {
  createConnection(config)
    .then((connection: Connection): void | PromiseLike<void> => {
      const app = new App([
        new UserController(connection),
      ]);
      app.run();
    })
    .catch((error: any) => {
      console.log('Error while getting connection.', error);
    });
} catch (error) {
  console.log('Error while connecting to database:', error);
}
