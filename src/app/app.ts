import bodyParser from 'body-parser';
import express from 'express';
import { Request, Response } from 'express';
import { ENVIRONMENT, PORT, PROTOCOL, URL } from '../environments/environment';

const app = express();

app.set('env', ENVIRONMENT);
app.set('protocol', PROTOCOL);
app.set('url', URL);
app.set('port', PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to home!' });
});

export default app;
