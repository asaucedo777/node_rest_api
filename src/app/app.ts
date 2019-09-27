import bodyParser from 'body-parser';
import express from 'express';
import { Request, Response } from 'express';

import * as homeController from '../app/controllers/home.controller';
import * as userController from '../app/controllers/user.controller';
import { ENVIRONMENT, PORT, PROTOCOL, URL } from '../environments/environment';

const app = express();

app.set('env', ENVIRONMENT);
app.set('protocol', PROTOCOL);
app.set('url', URL);
app.set('port', PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', homeController.getHome);
app.get('/users', userController.findAll);
app.get('/users/:id', userController.findAll);

export default app;
