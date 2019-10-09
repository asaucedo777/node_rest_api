import { Router } from 'express';

import { AuthenticationController } from '../controllers/authentication.controller';
import { UserController } from '../controllers/user.controller';
import { verifyJwt } from '../middleware/checkJwt';

const router = Router();

router.post('/auth', AuthenticationController.authenticate);

router.get('/users', [verifyJwt], UserController.staticGetAll);
router.get('/users/:id', [verifyJwt], UserController.staticGetById);
router.post('/users', [verifyJwt], UserController.staticCreate);
router.put('/users', [verifyJwt], UserController.staticUpdate);
router.patch('/users', [verifyJwt], UserController.staticModify);
router.delete('/users/:id', [verifyJwt], UserController.staticRemove);

export default router;
