import Comment from '../models/comment';



/*
* GET. all comments
* params: target_id, page
*
* */
export function indexByTarget(req, res, next) {

    if (!req.query.target_id){
        return res.status(400).send({
            success: false,
            error: 'Bad request.'
        });
    }

    Comment.find({_target_id: req.query.target_id}, (err, data) => {

    })




}






export function store(req, res, next) {



}


export function show(req, res, next) {



}



export function update(req, res, next) {



}


export function destroy(req, res, next) {



}