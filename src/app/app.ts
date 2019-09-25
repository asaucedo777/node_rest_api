import express from 'express';
import bodyParser from 'body-parser';
import { Request, Response } from "express";

const app = express();

app.set('port', 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.json({ "message": "Welcome to home!" });
});

export default app;
