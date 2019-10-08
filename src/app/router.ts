import { Router } from 'express';

import { UserController } from '../app/controllers/user.controller';

const router = Router();

router.get('/users', UserController.staticGetAll);
router.get('/users/:id', UserController.staticGetById);
router.post('/users', UserController.staticCreate);
router.put('/users', UserController.staticUpdate);
router.patch('/users', UserController.staticModify);
router.delete('/users/:id', UserController.staticRemove);

export default router;
