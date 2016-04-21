import Comment from '../models/comment';


/*
 * GET. all comments
 * params: target_id, page
 *
 * */
export function indexByTarget(req, res, next) {

    if (!req.query.target_id) {
        return res.status(400).send({
            success: false,
            error: 'Bad request.'
        });
    }


    Comment.find({_author_id: req.query.target_id}, (err, data) => {

        if (err) res.json({tt: 'sdfsd'});
        return res.json(data);

    });

}


export function store(req, res, next) {

    if (!req.body.target_id || !req.body.author_id || !req.body.body){
        return res.status(400).send({
            success: false,
            error: 'Bad request.'
        });
    }


    const comment = new Comment({

        _target_id: req.body.target_id,
        _author_id: req.body.author_id,
        body: req.body.body,

    });

    comment.save((err) => {
        return res.send(comment);
    });




}


export function show(req, res, next) {


}


export function update(req, res, next) {


}


export function destroy(req, res, next) {


}