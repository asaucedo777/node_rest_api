import bodyParser from 'body-parser';
import express from 'express';

import * as homeController from '../app/controllers/home.controller';
import * as userController from '../app/controllers/user.controller';
import { ENVIRONMENT, PORT, PROTOCOL, URL } from '../environments/environment';
import { ENVIRONMENT_ENV, ENVIRONMENT_PORT, ENVIRONMENT_PROTOCOL,
  ENVIRONMENT_URL, ROUTE_HOME, ROUTE_USERS, ROUTE_USERS_ID } from './constants/app.constants';

const app = express();

app.set(ENVIRONMENT_ENV, ENVIRONMENT);
app.set(ENVIRONMENT_PROTOCOL, PROTOCOL);
app.set(ENVIRONMENT_URL, URL);
app.set(ENVIRONMENT_PORT, PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get(ROUTE_HOME, homeController.getHome);
app.get(ROUTE_USERS, userController.getAll);
app.get(ROUTE_USERS_ID, userController.getById);
app.post(ROUTE_USERS, userController.create);
app.put(ROUTE_USERS, userController.update);
app.patch(ROUTE_USERS, userController.modify);
app.delete(ROUTE_USERS_ID, userController.erase);

export default app;
