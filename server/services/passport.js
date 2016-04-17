import passport from 'passport';
import User from '../models/user';
import config from '../config';
import { Strategy as JwtStrategy } from 'passport-jwt';
import { ExtractJwt as ExtractJwt } from 'passport-jwt';
import LocalStrategy from 'passport-local';

const localLogin = new LocalStrategy({ usernameField: 'email' }, function (email, password, done){

    User.findOne({ email }, function(err, user){
        if (err){ return done(err); }
        if (!user) { return done(null, false); }

        user.comparePassword(password, function(err, isMatch){
            if (err){ return done(err); }
            if (!isMatch) { return done(null, false)}

            return done(null,user);
        });

    })
});

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorisation'),
    secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
    User.findById(payload.sub, function(err, user){
        if (err){ return done(err, false); }

        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

passport.use(jwtLogin);
passport.use(localLogin);
