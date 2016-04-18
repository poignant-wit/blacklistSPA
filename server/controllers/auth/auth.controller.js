import jwt from 'jwt-simple'
import User from '../../models/user';
import config from '../../config';

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret);
}

export function signup(req, res, next) {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;


    if (!email || !password) {
        res.status(422).send({error: 'No email or password'})
    }


    User.findOne({email: email}, function (err, existingUser) {

        if (err) {
            return next(err);
        }

        if (existingUser) {
            return res.status(422).send({error: 'Email is in use'});
        }
        const user = new User({
            name,
            email,
            password
        });

        user.save(function (err) {
            if (err) {
                return next(err)
            }


            acl.addUserRoles(user.id, 'admin');

            res.json({token: tokenForUser(user)});
        });


    });


}

export function signin(req, res, next) {
    res.json({token: tokenForUser(req.user)});
}