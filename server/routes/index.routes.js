import { Router } from 'express';
import comments from './comment.routes';


const router = new Router();

comments(router);


export default router;



