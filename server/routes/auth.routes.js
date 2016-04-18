/*Auth routes*/

import { Router } from 'express';
import * as AuthController from '../controllers/auth/auth.controller';
import passportService from '../services/passport';
import passport from 'passport';
const router = new Router();

const isAuth = passport.authenticate('jwt', { session: false });
const isSignIn = passport.authenticate('local', { session: false });

/*sign up user
* */
router.route('/signup').post(AuthController.signup);

/*sign in user
* */
router.route('/signin').post(isSignIn, AuthController.signin);



export default router;