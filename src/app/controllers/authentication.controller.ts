import { Request, Response } from 'express';
import { buildJwtFromPostAuthentication } from '../middleware/checkJwt';

export class AuthenticationController {
  static authenticate(req: Request, res: Response) {
    // TODO Prueba de autenticación
    if (true) {
      buildJwtFromPostAuthentication(req, res);
    } else {
      res.status(401).send({
        message: 'No autorizado',
      });
    }
  }
}
