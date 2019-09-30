import bodyParser from 'body-parser';
import express from 'express';

import { ENVIRONMENT, PORT, PROTOCOL, URL } from '../environments/environment';
import { ENVIRONMENT_ENV, ENVIRONMENT_PORT, ENVIRONMENT_PROTOCOL,
  ENVIRONMENT_URL } from './constants/app.constants';
import router from './router';

const app = express();

app.set(ENVIRONMENT_ENV, ENVIRONMENT);
app.set(ENVIRONMENT_PROTOCOL, PROTOCOL);
app.set(ENVIRONMENT_URL, URL);
app.set(ENVIRONMENT_PORT, PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

export default app;
