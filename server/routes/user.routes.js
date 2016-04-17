import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();

// Get all Posts
router.route('/getusers').get(UserController.getUser);

export default router;