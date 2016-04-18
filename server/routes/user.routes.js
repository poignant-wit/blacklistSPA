import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();


import passport from 'passport';


const isAuth = passport.authenticate('jwt', { session: false });
const isSignIn = passport.authenticate('local', { session: false });



// Get all Posts
router.route('/test').get(isAuth, UserController.getUser);




export default router;