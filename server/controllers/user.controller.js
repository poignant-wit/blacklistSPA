import User from '../models/user';


export function getUser(req, res){
    res.send(req.user);
}

