import { Router } from 'express';
import comments from './comment.routes';
import auth from './auth.routes';


const router = new Router();

comments(router);
auth(router);


export default router;



