import jwt from 'jwt-simple'
import User from '../../models/user';
import mailer from '../../services/mailer'


import config from '../../config';


/*generate jwt token for user*/
function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret);
}


/*signup method*/
export function signup(req, res, next) {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;


    /*if no email or password in request => error*/
    if (!email || !password) {
        return res.status(422).send({error: 'No email or password'})
    }


    /*check if user exist with this email*/
    User.findOne({email: email}, function (err, existingUser) {

        if (err) {
            return next(err);
        }

        if (existingUser) {
            return res.status(422).send({
                success: false,
                error: 'Email is in use'
            });
        }

        /*create user*/
        const user = new User({
            name,
            email,
            password

        });

        /*save user*/
        user.save(function (err, user) {
            if (err) {
                return next(err)
            }


            //req.app.get('acl').addUserRoles(user.id, 'admin');



            /*in callback generate verification token */
            user.generateConfirmToken(function (err, token) {

                if (err) return res.json({
                    success: false,
                    info: 'Something wrong'
                });


                let baseURL = req.get('host');
                let mailOptions = {
                    from: '"Test Mailer" <silaprod@gmail.com>', // sender address
                    to: 'anatoliymandrichenko@gmail.com', // list of receivers
                    subject: 'HI', // Subject line
                    html: `<a href="${baseURL}/api/confirm/${token}"><h5>CONFIRM!</h5></a>`
                };


                /*send email*/
                mailer(config.smtpConfig, mailOptions, function (err, isSend) {
                    if (err) return res.json({
                        success: false,
                        info: 'Email has not been send'
                    });

                    res.json({
                        success: true,
                        info: 'Email has been send'
                    });
                })
            });
        });

        //res.json({token: tokenForUser(user)});

    });

}

/*method for confirmation email*/
export function confirm(req, res, next) {


    User.findByConfirmationCode(req.params.code, function (err, user){

        if (err) return res.json({
            success: false,
            info: 'Something wrong'
        });

        if (user){

            user.confirmed = true;
            user.save((err)=> {

                /*
                add role to user
                * */
                req.app.get('acl').addUserRoles(user.id, 'candidate');

                return res.json({
                    success: true,
                    info: `Email ${user.email} has been confirmed`
                });

            });

        }else{
            return res.json({
                success: false,
                info: 'Bad request'
            });
        }
    })

}



export function signin(req, res, next) {


    res.json({
        success: true,
        token: tokenForUser(req.user),
    });


}



