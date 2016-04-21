/*=====================COMMENTS ROUTES=========================*/

import * as CommentController from '../controllers/comment.controller';


export default (router) => {

    router.route('/comments').get(CommentController.indexByTarget);

    router.route('/comments').post(CommentController.store);



}