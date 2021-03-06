import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';

import { BBDD_HOST, BBDD_PORT, ENVIRONMENT, PORT, PROTOCOL, URL } from '../environments/environment';
import {
  ENVIRONMENT_ENV, ENVIRONMENT_PORT, ENVIRONMENT_PROTOCOL,
  ENVIRONMENT_URL,
} from './constants/app.constants';
import { IController } from './controllers/controller.interface';
import router from './routers/router';

export class App {
  public app: express.Application;
  constructor(controllers: IController[]) {
    this.app = express();

    this.app.set(ENVIRONMENT_ENV, ENVIRONMENT);
    this.app.set(ENVIRONMENT_PROTOCOL, PROTOCOL);
    this.app.set(ENVIRONMENT_URL, URL);
    this.app.set(ENVIRONMENT_PORT, PORT);

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
    this.app.use('/static', router);
    this.app.use(cors());
    this.app.use(helmet());
  }
  public run() {
    this.app.listen(PORT, () => {
      console.log(
        '  App is running at http://localhost:%d in %s mode',
        PORT,
        ENVIRONMENT,
      );
      console.log(
        '  Server is connected to database: %s://%s:%d/%s',
        'postgre',
        BBDD_HOST,
        BBDD_PORT,
        'test',
      );
      console.log('  Press CTRL-C to stop\n');
    });
  }
}
