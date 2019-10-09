import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export const secretOrPublicKey = 'PcmVIPbcZl9j7qFzXRAeSyhtuBnHQNMuLHsaG5l804A';

export const buildJwtFromPostAuthentication = (req: Request, res: Response, next?: NextFunction) => {
  const user = req.body.user;
  // Creamos un nuevo token firmado con información del usuario
  const newToken = jwt.sign({ user }, secretOrPublicKey, { expiresIn: '1h' });
  console.log('newToken: ', newToken);
  // Recuperamos toda la información del token (algorithm, expiresIn, audience, issuer, ..)
  const jwtPayload = jwt
    .verify(newToken, secretOrPublicKey);
  res.status(200).send('Información del token (jwtPayload): ' + JSON.stringify(jwtPayload));
  if (next !== undefined) {
    next();
  }
};

export const verifyJwt = (req: Request, res: Response, next?: NextFunction) => {
  const token: string = req.headers['auth'] as string;
  try {
    res.locals.jwtPayload = jwt.verify(token, secretOrPublicKey);
  } catch (error) {
    console.log('Error en verifyJwt: ', error);
    res.status(401);
  }
  if (next !== undefined) {
    next();
  }
};

export const checkJwtFromResponse = (req: Request, res: Response, next?: NextFunction) => {
  const newToken = res.getHeader('TOKEN_JWT') as string;
  const decodedPayload = jwt.decode(newToken);
  console.log('decodedPayload: ', decodedPayload);
  res.locals.jwtPayload = jwt
    .verify(newToken, secretOrPublicKey);
  if (next !== undefined) {
    next();
  }
};

export const checkJwt = (req: Request, res: Response, next?: NextFunction) => {
  const token: string = req.headers['auth'] as string;
  // tslint:disable-next-line: max-line-length
  try {
    // Decodificar token (ojo no verifica origen!!)
    const decodedPayload = jwt.decode(token);
    const jwtPayload = jwt
      .verify(token, secretOrPublicKey);
    } catch (error) {
    console.log('Unauthorized: ', error);
    res.status(401).send();
    return;
  }
  const newToken = jwt.sign(res.locals.jwtPayload, secretOrPublicKey, { expiresIn: '1h' });
  res.setHeader('TOKEN_JWT', newToken);
  if (next !== undefined) {
    next();
  }
};
