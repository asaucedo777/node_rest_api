import express from 'express';

import * as homeController from '../app/controllers/home.controller';
import * as userController from '../app/controllers/user.controller';
import { ROUTE_HOME, ROUTE_USERS, ROUTE_USERS_ID } from './constants/app.constants';

const router = express.Router();

router.get(ROUTE_HOME, homeController.getHome);
router.get(ROUTE_USERS, userController.getAll);
router.get(ROUTE_USERS_ID, userController.getById);
router.post(ROUTE_USERS, userController.create);
router.put(ROUTE_USERS, userController.update);
router.patch(ROUTE_USERS, userController.modify);
router.delete(ROUTE_USERS_ID, userController.erase);

export default router;
