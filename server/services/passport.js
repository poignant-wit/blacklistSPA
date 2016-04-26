import passport from 'passport';
import User from '../models/user';
import config from '../config';
import { Strategy as JwtStrategy } from 'passport-jwt';
import { ExtractJwt as ExtractJwt } from 'passport-jwt';
import LocalStrategy from 'passport-local';
import {Strategy as LinkedInStrategy} from 'passport-linkedin-oauth2';


/*passport strategy for local login
 * * it compares password stored in db with requested one*/
const localLogin = new LocalStrategy({usernameField: 'email', passwordField: 'password' }, function (email, password, done) {

    User.findOne({email}, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false);
        }

        user.comparePassword(password, function (err, isMatch) {
            if (err) return done(err);
            if (!isMatch) return done(null, false);
            return done(null, user);
        });

    })
});


/*passport config for jwt login*/
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorisation'),
    secretOrKey: config.secret
};

/*passport strategy for jwt login
 * check if request is authorized by jwt*/
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
    User.findById(payload.sub, function (err, user) {
        if (err) {
            return done(err, false);
        }

        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});


const linkedInOptions = {
    clientID: 45634563456,
    clientSecret: 56745674567,
    callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_basicprofile'],
    state: true
};

/*passport strategy for linkedin login*/

const linkedInLogin = new LinkedInStrategy(linkedInOptions, (accessToken, refreshToken, profile, done) => {

    process.nextTick(() => {

        User.findOne({social: {linkedin: {id: profile.id}}}, (err, user) => {
            if (err) return done(err);

            if (user) {
                return done(null, user);
            } else {

                let newUser = new User();
                newUser.social.linkedin.id = profile.id;
                newUser.name = profile.givenName;

                newUser.save(err => {
                    if (err) return done(err);
                    return done(null, newUser);


                })
            }
        });
    });
});


passport.use(jwtLogin);
passport.use(localLogin);
passport.use(linkedInLogin);




